import React,{useState} from "react";
import logo from "./logo.svg";
import "./App.css";
import ProductsList from "./Products/ProductsList";
import PorductForm from "./Products/ProductForm";
import { Provider } from "react-redux";
import store from "./store";
import Cart from "./components/Cart/Cart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./common/header/header";
import Footer from "./common/footer/footer";
import Pages from "./Pages/pages";


function App() {
  return (
    // <ThemeProvider theme={theme}>

    // </ThemeProvider>
    <>
      <Provider store={store}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Pages />}></Route>
          </Routes>
          <Routes >
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
          <Footer />
        </Router>
      </Provider>
    </>

    //   {/* //   <div className="App">
    // //     <ProductsList />
    // //     <PorductForm />
    // //     <Cart />
    // //   </div> */}
  );
}

export default App;
