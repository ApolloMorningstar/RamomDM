import React, { useState } from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';

const App = () => {
  const [number, setNumber] = useState('');
  const [segNumber, setSegNumber] = useState('');
  const [resultado, setResultado] = useState('');
  const [operacao, setOperacao] = useState(null);
  const [isFirstNumber, setIsFirstNumber] = useState(true);

  const handleNumberPress = (num) => {
    if (isFirstNumber) {
      setNumber(number + num);
    } else {
      setSegNumber(segNumber + num);
    }
  };

  const calcularResultado = () => {
    let result;
    const num1 = Number(number);
    const num2 = Number(segNumber);

    if (operacao === '+') {
      result = num1 + num2;
    } else if (operacao === '-') {
      result = num1 - num2;
    } else if (operacao === '/') {
      result = num1 / num2;
    } else if (operacao === '*') {
      result = num1 * num2;
    }

    setResultado(result);
    setNumber(result.toString());  // Atualiza o número para mostrar o resultado
    setSegNumber('');
    setIsFirstNumber(true);
    setOperacao(null);
  };

  const limpar = () => {
    setNumber('');
    setSegNumber('');
    setResultado('');
    setIsFirstNumber(true);
    setOperacao(null);
  };

  const selecionarOperacao = (op) => {
    if (!isFirstNumber) {
      calcularResultado();
    }
    setOperacao(op);
    setIsFirstNumber(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CALCULADORA</Text>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>
          {resultado !== '' ? resultado : (isFirstNumber ? number : segNumber)}
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        {[...Array(10).keys()].map((num) => (
          <View style={styles.buttonNumero} key={num}>
            <Button title={String(num)} onPress={() => handleNumberPress(num)} />
          </View>
        ))}
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.buttonOperacao}>
          <Button title="+" onPress={() => selecionarOperacao('+')} />
        </View>
        <View style={styles.buttonOperacao}>
          <Button title="-" onPress={() => selecionarOperacao('-')} />
        </View>
        <View style={styles.buttonOperacao}>
          <Button title="/" onPress={() => selecionarOperacao('/')} />
        </View>
        <View style={styles.buttonOperacao}>
          <Button title="x" onPress={() => selecionarOperacao('*')} />
        </View>
        <View style={styles.buttonOperacao}>
          <Button title="=" onPress={calcularResultado} />
        </View>
        <View style={styles.buttonOperacao}>
          <Button title="C" onPress={limpar} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  resultContainer: {
    width: '80%',
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  resultText: {
    fontSize: 24,
    textAlign: 'right',
  },
  buttonContainer: {
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
  resultadoText: {
    fontSize: 24,
    marginTop: 20,
  },
});

export default App;
