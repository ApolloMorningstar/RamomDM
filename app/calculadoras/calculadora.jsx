import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

const App = () => {
    const [number, setNumber] = useState('');
    const [segnumber, setsegNumber] = useState('');
    const [resultado, setResultado] = useState('');
    
    
    const soma = function () {
      setResultado(Number(number) + Number(segnumber)) 
      return number
    }
    const subtração = function () {
      setResultado(Number(number) - Number(segnumber)) 
      return number
    }
    const divisão = function () {
      setResultado(Number(number) / Number(segnumber))
      return number
    }
    const multiplicação = function () {
      setResultado(Number(number) * Number(segnumber)) 
      return number
    }
    const limpar = () => {
      setNumber('');
      setsegNumber('');
      setResultado('');
    };
    return (
      <View style={styles.container}>
        <Text>CALCULADORA</Text>
        <Text>Instruções: Digite o primeiro número, digite o segunde e logo depois aperte o botão da operação que você deseja executar</Text>
        
        <TextInput   
          onChangeText={setNumber} 

          value={number}
          keyboardType='numeric'
        />
          <TextInput   
          onChangeText={setsegNumber} 
          value={segnumber}
          keyboardType='numeric'
        /> 
        <View style={styles.buttonContainer1}>
        <View style={styles.buttonNumero}><Button title= '0' onPress= {() => concatenado1()}/></View>
        <View style={styles.buttonNumero}><Button title= '1' onPress= {() => concatenado1()}/></View>
        <View style={styles.buttonNumero}><Button title= '2' onPress= {() => concatenado1()}/></View>
        <View style={styles.buttonNumero}><Button title= '3' onPress= {() => concatenado1()} /></View>
        <View style={styles.buttonNumero}><Button title= '4' onPress= {() => concatenado1()} /></View>
        <View style={styles.buttonNumero}><Button title="5"  onPress={() => concatenado1()} /></View>
        <View style={styles.buttonNumero}><Button title="6"  onPress={() => concatenado1()} /></View>
        <View style={styles.buttonNumero}><Button title="7"  onPress={() => concatenado1()} /></View>
        <View style={styles.buttonNumero}><Button title="8"  onPress={() => concatenado1()} /></View>
        <View style={styles.buttonNumero}><Button title="9"  onPress={() => concatenado1()} /></View>
        <View style={styles.buttonContainer}>
        <View style={styles.buttonOperacao}><Button title= '+' onPress= {() => soma()}/></View>
        <View style={styles.buttonOperacao}><Button title= '-' onPress= {() => subtração()}/></View>
        <View style={styles.buttonOperacao}><Button title= '/' onPress= {() => divisão()} /></View>
        <View style={styles.buttonOperacao}><Button title= 'x' onPress= {() => multiplicação()} /></View>
        <View style={styles.buttonOperacao}><Button title="C"  onPress={() => limpar()}/></View>
       
  
        <Text> O valor é {resultado}</Text>
  
      </View>
        </View>
      </View>
    );
  };const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#f0f0f0', 
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#333', 
    },
    input: {
      fontSize: 18,
      width: '80%',
      marginBottom: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      paddingHorizontal: 10,
      textAlign: 'center', 
    },
    buttonContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      width: '80%',
      marginBottom: 10,
    },
    buttonContainer1: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      width: '80%',
      marginBottom: 10,
    },
    buttonNumero: {
      width: '20%',
      margin: 5,
      backgroundColor: '#ffffff',
      borderRadius: 5,
    },
    buttonOperacao: {
      width: '20%',
      margin: 5,
      backgroundColor: '#ff5722', 
      borderRadius: 5,
    },
  });
  
  export default App;
  
  
  