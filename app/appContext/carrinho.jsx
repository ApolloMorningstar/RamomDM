import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const Carrinho = ({ route }) => {
  const { itens } = route.params;

  const total = itens.reduce((acc, item) => acc + item.valor, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Carrinho de Compras</Text>
      <Text style={styles.cartText}>Total de Itens: {itens.length}</Text>
      <FlatList
        data={itens}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.title}</Text>
            <Text style={styles.itemText}>R$ {item.valor.toFixed(2)}</Text>
          </View>
        )}
      />
      <Text style={styles.totalText}>Total: R$ {total.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  cartText: {
    fontSize: 18,
    textAlign: "center",
    marginVertical: 10,
  },
  itemContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  itemText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  totalText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#EA1D2C",
    textAlign: "center",
    marginTop: 20,
  },
});

export default Carrinho;
