import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default Seletor = () => {
    const [pokemon, setPokemon] = useState('');
    const [pokemonData, setPokemonData] = useState(null);

    const Lista_pokemons = [
        { nome: 'Mew', value: 'mew' },
        { nome: 'Lucário', value: 'lucario' },
        { nome: 'Greninja', value: 'greninja' },
        { nome: 'Serperior', value: 'serperior' },
        { nome: 'Zoroark', value: 'zoroark' }
    ];

    const fetchData = async (pokemon) => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
            const data = await response.json();
            setPokemonData(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (pokemon) {
            fetchData(pokemon);
        }
    }, [pokemon]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Selecione um Pokémon</Text>
            <Picker
                style={styles.picker}
                selectedValue={pokemon}
                onValueChange={(itemValue) => setPokemon(itemValue)}
            >
                <Picker.Item label="Selecione um Pokémon" value="" />
                {Lista_pokemons.map((item, index) => (
                    <Picker.Item key={index} label={item.nome} value={item.value} />
                ))}
            </Picker>
            
            {pokemonData && (
                <View style={styles.pokemonContainer}>
                    <Text style={styles.title}>Pokémon</Text>
                    <Text style={styles.name}>{pokemonData.name}</Text>
                    <Text style={styles.weight}>Peso: {pokemonData.weight}</Text>
                    <Image
                        style={styles.image}
                        source={{ uri: pokemonData.sprites.front_default }}
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
        backgroundColor: '#f0f0f0',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    picker: {
        height: 50,
        backgroundColor: '#fff',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
    },
    pokemonContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    weight: {
        fontSize: 16,
    },
    image: {
        width: 100,
        height: 100,
        marginTop: 10,
    },
});
