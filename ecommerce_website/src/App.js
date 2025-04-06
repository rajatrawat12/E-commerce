import Login from "./components/login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Jewelery from "./components/jewallary";
import Products from "./components/Product";
import Cart from "./components/Cart";
import Clothing from "./components/clothing";
import { Provider } from "react-redux";
import ProductDetails from "./components/Productdetails";
import store from "./Store";
import Electronics from "./components/Electronics";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


function App() {
  return (
    
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/allProducts" element={<Products />} />
          <Route exact path="/electronics" element={<Electronics />} />
          <Route exact path= "/clothings" element={<Clothing />}/>
          <Route exact path= "/jewelerys" element={<Jewelery />}/>
          <Route exact path="/product/:id" element={<ProductDetails />} />
          <Route exact path="/Cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
