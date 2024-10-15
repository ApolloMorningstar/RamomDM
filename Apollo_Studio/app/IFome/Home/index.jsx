// import React, { useContext } from "react";
// import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";
// import { Link } from "expo-router";
// import { AppContext } from "../../../scripts/AppContext";

// const produtos = [
//   { id: '1', title: 'Hambúrguer', valor: 20.00, image: require('../Home/pasta imagens/hamburguer.png') },
//   { id: '2', title: 'Pizza', valor: 45.00, image: require('../Home/pasta imagens/pizza.png')},
//   { id: '3', title: 'Hot Dog', valor: 15.00, image: require('../Home/pasta imagens/hotdog.png') },
//   { id: '4', title: 'Açaí', valor: 30.00, image: require('../Home/pasta imagens/acai.png') },
// ];

// const Home = () => {
//   const { adicionarAoCarrinho, carrinho } = useContext(AppContext);

//   const renderItem = ({ item }) => (
//     <View style={styles.itemContainer}>
//       <Image source={item.image} style={styles.image} />
//       <Text style={styles.itemText}>{item.title} - R$ {item.valor.toFixed(2)}</Text>
//       <TouchableOpacity
//         style={styles.addButton}
//         onPress={() => adicionarAoCarrinho(item)}
//       >
//         <Text style={styles.buttonText}>Adicionar ao Carrinho</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <View style={styles.headerContainer}>
//         <TouchableOpacity style={styles.iconButton}>
//           <Image
//             source={require('../Home/pasta imagens/menu.png')}
//             style={styles.icon}
//           />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>iFome Doppelganger</Text>
//         <TouchableOpacity style={styles.iconButton}>
//           <Link to="/carrinho">
//             <Image
//               source={require('../Home/pasta imagens/cart.png')}
//               style={styles.icon}
//             />
//           </Link>
//         </TouchableOpacity>
//       </View>

//       {/* Qtd de Itens no Carrinho */}
//       <Text style={styles.cartText}>Itens no Carrinho: {carrinho.length}</Text>

//       {/* Lista de Produtos */}
//       <FlatList
//         data={produtos}
//         renderItem={renderItem}
//         keyExtractor={item => item.id}
//       />

//       <Link to="/carrinho" style={styles.carrinhoLink}>
//         <Text style={styles.carrinhoText}>Ir para o Carrinho</Text>
//       </Link>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//   },
//   headerContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   headerTitle: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   iconButton: {
//     padding: 10,
//   },
//   icon: {
//     width: 30,
//     height: 30,
//   },
//   cartText: {
//     fontSize: 16,
//     marginVertical: 10,
//   },
//   itemContainer: {
//     marginBottom: 15,
//   },
//   image: {
//     width: 100,
//     height: 100,
//   },
//   itemText: {
//     fontSize: 18,
//   },
//   addButton: {
//     backgroundColor: '#4CAF50',
//     padding: 10,
//     borderRadius: 5,
//     marginTop: 10,
//   },
//   buttonText: {
//     color: '#fff',
//     textAlign: 'center',
//   },
//   carrinhoLink: {
//     marginTop: 20,
//     alignItems: 'center',
//   },
//   carrinhoText: {
//     fontSize: 18,
//     color: '#007BFF',
//   },
// });

// export default Home;
