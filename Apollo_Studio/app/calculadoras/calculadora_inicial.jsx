import React, {useState} from 'react';
import {  StyleSheet, Text, TextInput, Button, TextInputComponent, View } from 'react-native';

const App = () => {
    const [number, setNumber] = useState('');
    const [resultado, setResultado] = useState('')
  
    const soma = function () {
      setResultado(Number(number) + 5) // converter stirng para número
      return number
    }
    const subtração = function () {
      setResultado(Number(number) - 5) // converter stirng para número
      return number
    }
    const divisão = function () {
      setResultado(Number(number) / 5) // converter stirng para número
      return number
    }
    const multiplicação = function () {
      setResultado(Number(number) * 5) // converter stirng para número
      return number
    }
  
    return (
      <View style={styles.container}>
        <Text>CALCULADORA</Text>
        
        <TextInput   
          onChangeText={setNumber} 
          value={number}
          placeholder='Insira o número'
          keyboardType='numeric'
        />
        <View style={styles.buttonContainer}>
        <Button title= '+'  onPress= {() => soma()} />
        <Button title= '-'  onPress= {() => subtração()} />
        <Button title= '/'  onPress= {() => divisão()} />
        <Button title= 'x'  onPress= {() => multiplicação()}/>
        </View>
       
  
        <Text> O valor é {resultado}</Text>
  
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 20,
  },
    
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100px',
    margin: 15,
  },
});
export default App;