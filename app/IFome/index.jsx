// import React, { useState } from 'react';
// import { View, Button } from 'react-native';
// import { AppProvider } from '../../../scripts/AppContext'; 
// import Home from '../IFome/Home/index';
// import Carrinho from './cart/index';

// const App = () => {
//   const [isCarrinhoVisible, setCarrinhoVisible] = useState(false);

//   return (
//     <AppProvider>
//       <View style={{ flex: 1 }}>
//         <Button
//           title={isCarrinhoVisible ? "Voltar para Home" : "Ir para Carrinho"}
//           onPress={() => setCarrinhoVisible(prev => !prev)}
//         />
//         {isCarrinhoVisible ? <Carrinho /> : <Home />}
//       </View>
//     </AppProvider>
//   );
// };

// export default App;
