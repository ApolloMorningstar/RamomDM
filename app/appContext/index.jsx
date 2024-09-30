import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";

const App = () => {
  const [tarefas, setTarefas] = useState([
    { id: '1', title: 'Hambúrguer - R$ 20,00', valor: 20.00, completed: false, image: require('../appContext/pasta imagens/hamburguer.png') },
    { id: '2', title: 'Pizza - R$ 45,00', valor: 45.00, completed: false, image: require('../appContext/pasta imagens/pizza.png') },
    { id: '3', title: 'Hot Dog - R$ 15,00', valor: 15.00, completed: false, image: require('../appContext/pasta imagens/hotdog.png') },
    { id: '4', title: 'Açaí - R$ 30,00', valor: 30.00, completed: false, image: require('../appContext/pasta imagens/acai.png') },
  ]);

  const [carrinhoItem, setCarrinhoItem] = useState(0);

  const atualizarCarrinho = (id, adicionar) => {
    setTarefas(tarefas.map(tarefa => {
      if (tarefa.id === id) {
        if (adicionar && !tarefa.completed) {
          setCarrinhoItem(carrinhoItem + 1);
          return { ...tarefa, completed: true };
        } else if (!adicionar && tarefa.completed) {
          setCarrinhoItem(carrinhoItem > 0 ? carrinhoItem - 1 : 0);
          return { ...tarefa, completed: false };
        }
      }
      return tarefa;
    }));
  };

  const renderizarTarefa = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Image source={item.image} style={styles.image} />
        <Text style={[styles.itemText, item.completed && styles.completedText]}>
          {item.title}
        </Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={[styles.button, styles.completedButton]}
            onPress={() => atualizarCarrinho(item.id, true)}
          >
            <Text style={styles.buttonText}>Adicionar ao Carrinho</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.pendingButton]}
            onPress={() => atualizarCarrinho(item.id, false)}
          >
            <Text style={styles.buttonText}>Retirar do Carrinho</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <Image
            source={require('../appContext/pasta imagens/menu.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>iFome Doppelganger</Text>
        <TouchableOpacity style={styles.iconButton}>
          <Image
            source={require('../appContext/pasta imagens/cart.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.cartText}>Itens no Carrinho: {carrinhoItem}</Text>

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
    backgroundColor: '#F5F5F5',
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#EA1D2C',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  iconButton: {
    padding: 10,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: '#FFFFFF',
  },
  cartText: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 10,
  },
  itemContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    alignItems: 'center',
  },
  itemText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 10,
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 25,
  },
  completedButton: {
    backgroundColor: '#4CAF50',
  },
  pendingButton: {
    backgroundColor: '#F44336',
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
});

export default App;
