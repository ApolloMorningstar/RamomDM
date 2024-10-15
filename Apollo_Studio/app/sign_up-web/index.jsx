import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet, SafeAreaView, Image, Dimensions } from 'react-native';

// Obtém a largura da tela
const { width } = Dimensions.get('window');

const SignUp = () => {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const CapaSignUp = require('./pasta_de_imagens/img2.jpg')

    const limparCadastro = () => {
        setNome('')
        setEmail('')
        setSenha('')
    }; 

    const registrarUsuario = async function () {
        if (!nome || !email || !senha) {
            console.log('Os parâmetros nome, email e senha não foram fornecidos')
            return; // Pare a execução se algum parâmetro estiver faltando
        }
        try {
            const resposta = await fetch('https://taskhub-s37f.onrender.com/auth/signup', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: nome, email: email, password: senha })
            });

            if (resposta.ok) {
                console.log('Usuário criado com sucesso')
                limparCadastro()
            } else {
                console.log('Ocorreu um erro:', resposta.status);
            }
        } catch (error) {
            console.log('Erro na solicitação:', error)
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imageContainer}>
                <Image 
                    style={styles.image} 
                    source={CapaSignUp} 
                />
            </View>
            <View style={styles.formContainer}>
                <Text style={styles.Titulo}>Registrar</Text>
                <Text style={styles.label}>Nome: </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={text => setNome(text)}
                    value={nome}
                    placeholder="Digite seu Nome"
                    keyboardType="default"
                    autoCapitalize="words"
                />
                <Text style={styles.label}>Endereço de Email: </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={text => setEmail(text)}
                    value={email}
                    placeholder="Digite seu Email"
                    keyboardType="email-address"
                />
                <Text style={styles.label}>Senha: </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={text => setSenha(text)}
                    value={senha}
                    placeholder="Digite sua senha"
                    secureTextEntry={true}
                />
                <Pressable onPress={registrarUsuario} style={styles.Pressable} >
                    <Text style={styles.button}>Cadastrar</Text>
                </Pressable>    
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: width > 600 ? 'row' : 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#2E3A59',
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: width > 600 ? 50 : 0, 
    },
    image: {
        width: '100%',
        aspectRatio: 4 / 3,
        resizeMode: 'cover',
        borderRadius: 15,
        marginLeft: 50,
    },
    formContainer: {
        flex: 1,
        justifyContent: 'center',
        padding: 10,
        marginLeft: width > 600 ? 10 : 0, 
        marginRight: 50,
    },
    label: {
        fontSize: 18,
        marginBottom: 8,
        color: '#D9E3F0',
        fontFamily: 'Helvetica',
    },
    Titulo: {
        fontSize: 24,
        color: '#D9E3F0',
        fontFamily: 'Helvetica',
        textAlign: 'center',
        marginBottom: 30,
    },
    Pressable: {
        height: 40,
        marginBottom: 8,
        backgroundColor: '#455A64',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        fontSize: 18,
        fontFamily: 'Helvetica',
        color: '#D9E3F0',
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderColor: '#A7BBC7',
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 10,
        marginBottom: 20,
        backgroundColor: '#1C273D',
        color: '#D9E3F0',
    },
});

export default SignUp;
