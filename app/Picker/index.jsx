import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default Seletor = () => {
    // Criamos um estado para armazenar o Pokémon selecionado
    const [pokemon, setPokemon] = useState('');
    // Estamos criando uma "variável de estado" chamada pokemon usando o useState.
    // O valor inicial dessa variável é uma string vazia ('').
    // pokemon: é o valor atual do estado, ou seja, o Pokémon que está selecionado no momento.
    // setPokemon: é a função que atualiza o valor de pokemon quando o usuário escolhe um Pokémon diferente.

    // Estado para armazenar a lista de Pokémons
    const [listaPokemons, setListaPokemons] = useState([]);
    // Estado para armazenar os dados do Pokémon selecionado
    const [pokemonComponente, setPokemonComponente] = useState(null);

    // useEffect para buscar a lista de Pokémon ao montar o componente
    useEffect(() => {
        // Fazendo uma requisição para a API dos Pokémons
        fetch('https://pokeapi.co/api/v2/pokemon?limit=500')
            .then(response => response.json()) // Convertendo a resposta para JSON
            .then(dados => setListaPokemons(dados.results)) // Atualizando o estado com a lista de Pokémons
            .catch(error => console.error(error)); // Tratando erros
    }, []); // O array vazio indica que o useEffect deve rodar apenas uma vez após o componente ser montado

    // useEffect para buscar os dados do Pokémon selecionado
    useEffect(() => {
        if (pokemon) {
            // Fazendo uma requisição para a API do Pokémon selecionado
            fetch(pokemon)
                .then(response => response.json()) // Convertendo a resposta para JSON
                .then(data => setPokemonComponente(data)) // Atualizando o estado com os dados do Pokémon
                .catch(error => console.error(error)) // Tratando erros
        }
    }, [pokemon]) // O useEffect roda sempre que o valor de pokemon mudar

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Selecione um Pokémon</Text>
            <Picker
                style={styles.picker}
                selectedValue={pokemon}
                // O Picker exibe o menu suspenso para o usuário escolher um Pokémon.
                // selectedValue={pokemon} define o valor que está atualmente selecionado (armazenado em pokemon).
                // Isso significa que o Pokémon que o usuário escolheu será exibido no Picker.
                onValueChange={(itemValue) => setPokemon(itemValue)}
                // Toda vez que o usuário seleciona uma nova opção no Picker, a função onValueChange é chamada.
                // O valor da opção selecionada (itemValue) será passado como argumento para setPokemon.
                // Isso atualiza o valor de pokemon com o novo Pokémon selecionado.
            >
                <Picker.Item label="Selecione um Pokémon" />
                {/* Esse Picker.Item é a primeira opção do menu, que serve como instrução para o usuário. */}
                {/* label é o texto que aparece no menu, e value é o valor interno (aqui está vazio para indicar nenhuma seleção feita ainda). */}

                {listaPokemons.map((item, index) => (
                    <Picker.Item key={index} label={item.name} value={item.url} />
                    // Usamos o método map para percorrer a "listaPokemons".
                    // Para cada Pokémon na lista, criamos um Picker.Item com o nome (label) e valor (value) correspondentes.
                    // key={index} é uma chave única para cada item, o que ajuda o React a identificar e atualizar cada item corretamente.
                ))}
            </Picker>
            {pokemonComponente && (
                <View style={styles.pokemonContainer}>
                    <Text style={styles.title}>Pokémon</Text>
                    <Text style={styles.name}>{pokemonComponente.name.charAt(0).toUpperCase() + pokemonComponente.name.slice(1)}</Text>
                    {/*.charAt(0).toUpperCase() + pokemonComponente.name.slice(1): deixa a primeira letra maiuscula*/}
                    <Text style={styles.weight}>Peso: {pokemonComponente.weight}00g</Text>
                    <Image
                        style={styles.image}
                        source={{ uri: pokemonComponente.sprites.front_default }}
                    />
                    {/* Exibindo a imagem do Pokémon */}
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