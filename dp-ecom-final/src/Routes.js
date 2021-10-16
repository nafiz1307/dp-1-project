import React, { useState } from 'react'
import { Web3Context } from './Context/Web3Context'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from './pages/Home';
import Shop from './pages/Shop';
import ShopDetail from './pages/ShopDetail'
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
<<<<<<< Updated upstream
=======
import { ContextStore } from './Context/ContextStore';
import Shipping from "./pages/Shipping"
>>>>>>> Stashed changes

export default function Routes() {
    const [web3Context, setWeb3Context] = useState({})
    return(
        <BrowserRouter>
        <Switch>
            <Web3Context.Provider value={{web3Context, setWeb3Context}}>
                <Route exact path = "/" component = {Home}/>
                <Route exact path = "/shop" component = {Shop}/>
                <Route exact path = "/shop-detail" component = {ShopDetail}/>
                <Route exact path = "/cart" component = {CartPage}/>
                <Route exact path = "/check-out" component = {CheckoutPage}/>
                <Route exact path = "/shipping-status" component = {Shipping}/>
            </Web3Context.Provider>
        </Switch>
        </BrowserRouter>
    )
}