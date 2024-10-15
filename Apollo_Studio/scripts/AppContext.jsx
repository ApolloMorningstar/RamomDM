// import { createContext, useState } from "react";

// export const AppContext = createContext();

// export const AppProvider = ({ children }) => {
//   const [carrinho, setCarrinho] = useState([]);
  
//   const adicionarAoCarrinho = (produto) => {
//     setCarrinho([...carrinho, produto]);
//   };

//   const removerDoCarrinho = (id) => {
//     setCarrinho(carrinho.filter(item => item.id !== id));
//   };

//   return (
//     <AppContext.Provider value={{ carrinho, adicionarAoCarrinho, removerDoCarrinho }}>
//       {children}
//     </AppContext.Provider>
//   );
// };
