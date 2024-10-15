// import React, { useContext } from "react";
// import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
// import { AppContext } from "../../../scripts/AppContext";

// const Carrinho = () => {
//   const { carrinho, removerDoCarrinho } = useContext(AppContext);

//   const calcularTotal = () => {
//     return carrinho.reduce((total, item) => total + item.valor, 0).toFixed(2);
//   };

//   const renderItem = ({ item }) => (
//     <View style={styles.itemContainer}>
//       <Text style={styles.itemText}>{item.title}</Text>
//       <Text style={styles.valorText}>R$ {item.valor.toFixed(2)}</Text>
//       <TouchableOpacity onPress={() => removerDoCarrinho(item.id)}>
//         <Text style={styles.removeText}>Remover</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       {carrinho.length === 0 ? (
//         <Text style={styles.emptyCartText}>O carrinho está vazio.</Text>
//       ) : (
//         <FlatList
//           data={carrinho}
//           renderItem={renderItem}
//           keyExtractor={item => item.id}
//           ListFooterComponent={() => (
//             <View style={styles.footer}>
//               <Text style={styles.totalText}>Total: R$ {calcularTotal()}</Text>
//             </View>
//           )}
//         />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   itemContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 10,
//   },
//   itemText: {
//     fontSize: 18,
//   },
//   valorText: {
//     fontSize: 18,
//   },
//   footer: {
//     marginTop: 20,
//     alignItems: 'center',
//   },
//   totalText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   emptyCartText: {
//     fontSize: 18,
//     textAlign: 'center',
//     marginTop: 20,
//   },
//   removeText: {
//     color: 'red',
//     fontSize: 16,
//   },
// });

// export default Carrinho;
