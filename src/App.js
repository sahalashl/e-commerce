import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Header from "./components/Header";
import ProductList from "./components/ProductLIst";
import Cart from "./components/Cart";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <ProductList />
      <Cart />
    </Provider>
  );
};

export default App;
