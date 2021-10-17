import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PagePreloader from "./components/Page-preloader";
import Humberger from "./components/Humberger";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Fragment, useState } from "react";
import Routes from "./Routes";
import { ContextStore } from "./Context/ContextStore";

function App() {
    const [contextStore, setContextStore] = useState({
        cart: [],
        numberOfProductInCart: 0,
        wishList: [],
        numberOfProductInWishList: 0,
        cartTotal: 0
    });
    return (
        <ContextStore.Provider value={{ contextStore, setContextStore }}>
            <Routes />
        </ContextStore.Provider>
    );
}

export default App;
