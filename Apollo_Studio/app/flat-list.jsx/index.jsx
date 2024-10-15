import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";

const App = () => {
  const [tarefas, setTarefas] = useState([
    { id: '1', title: 'Acordar', completed: false },
    { id: '2', title: 'Escovar os dentes', completed: false },
    { id: '3', title: 'Se arrumar', completed: false },
    { id: '4', title: 'Ir para escola', completed: false },
  ]);

  const marcarConcluida = (id) => {
    setTarefas(tarefas.map(tarefa => {
      if (tarefa.id === id) {
        return { ...tarefa, completed: true };
      } else {
        return tarefa;
      }
    }));
  };
  
  const marcarPendente = (id) => {
    setTarefas(tarefas.map(tarefa => {
      if (tarefa.id === id) {
        return { ...tarefa, completed: false };
      } else {
        return tarefa;
      }
    }));
  };
  

  const renderizarTarefa = ({ item }) => {
    let estiloTexto;
    if (item.completed) {
      estiloTexto = styles.completedText;
    } else {
      estiloTexto = styles.itemText;
    }

    return (
      <View style={styles.itemContainer}>
        <Text style={estiloTexto}>
          {item.title}
        </Text>
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button
              title="Concluído"
              onPress={() => marcarConcluida(item.id)}
              color="#4CAF50"
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Pendente"
              onPress={() => marcarPendente(item.id)}
              color="#F44336"
            />
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lista de tarefas</Text>
      <FlatList
        data={tarefas}
        renderItem={renderizarTarefa}
        keyExtractor={item => item.id}
      />
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
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  itemContainer: {
    width: '100%',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 18,
    marginBottom: 10,
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
  },
});

export default App;
