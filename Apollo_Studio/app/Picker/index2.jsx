import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default Seletor = () => {
    const [pokemon, setPokemon] = useState('')
    const [listaPokemons, setListaPokemons] = useState([]);
    const [pokemonComponente, setPokemonComponente] = useState(null);
    const [poketype, setpokeType] = useState(null);
    const [listatypePokemons, setTypeListaPokemons] = useState([]);


    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/type/')
            .then(response => response.json())
            .then(dados => setTypeListaPokemons(dados.results))
            .catch(error => console.error(error));
    }, []);

    useEffect(() => {
        if (poketype) {
            fetch(`https://pokeapi.co/api/v2/type/${poketype}`)
                .then(response => response.json())
                .then(dados => setListaPokemons(dados.pokemon)) // Ajuste conforme a estrutura da resposta
                .catch(error => console.error(error));
        }
    }, [poketype]);
    
    

    useEffect(() => {
        if (pokemon) {
            fetch(pokemon)
                .then(response => response.json())
                .then(data => setPokemonComponente(data)) 
                .catch(error => console.error(error)) 
        }
    }, [pokemon]) 

    

    return (
        <View style={styles.container}>
               <Picker
                style={styles.picker}
                selectedValue={poketype}
                onValueChange={(itemValue) => setpokeType(itemValue)}
            >
                <Picker.Item label="Selecione um Tipo de Pokémon" />
            {listatypePokemons.map((type) => (
                <Picker.Item key={type} label={type.name} value={type.name} />
            ))}
            </Picker>


            <Text style={styles.title}>Selecione um Pokémon</Text>
            <Picker
                style={styles.picker}
                selectedValue={pokemon}
                onValueChange={(itemValue) => setPokemon(itemValue)}
            >
                <Picker.Item label="Selecione um Pokémon" />
                {listaPokemons.map((item) => (
                    <Picker.Item key={item.pokemon.url} label={item.pokemon.name} value={item.pokemon.url} />
                    ))}
            </Picker>
            {pokemonComponente && (
                <View style={styles.pokemonContainer}>
                    <Text style={styles.title}>Pokémon</Text>
                    <Text style={styles.name}>{pokemonComponente.name.charAt(0).toUpperCase() + pokemonComponente.name.slice(1)}</Text>
                    <Text style={styles.weight}>Peso: {pokemonComponente.weight}00g</Text>
                    <Image
                        style={styles.image}
                        source={{ uri: pokemonComponente.sprites.front_default }} 
                    />
                </View>
            )}
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#e0f7fa', 
    },
    title: {
        fontSize: 26,
        fontWeight: '700',
        color: '#00796b', 
        marginBottom: 20,
        textAlign: 'center',
    },
    picker: {
        height: 50,
        backgroundColor: '#ffffff',
        borderColor: '#00796b',
        borderWidth: 2,
        borderRadius: 10,
        marginBottom: 20,
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 2,
    },
    pokemonContainer: {
        marginTop: 20,
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 4,
    },
    pokemonTitle: {
        fontSize: 24,
        fontWeight: '700',
        color: '#004d40', 
        marginBottom: 10,
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#004d40',
        marginBottom: 10,
    },
    weight: {
        fontSize: 18,
        color: '#004d40',
        marginBottom: 10,
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 10,
        marginTop: 10,
        resizeMode: 'contain',
    },
});