import React, { useState } from 'react'
import { Web3Context } from './Context/Web3Context'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from './pages/Home';
import Shop from './pages/Shop';
import ShopDetail from './pages/ShopDetail'
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';

import { ContextStore } from './Context/ContextStore';
import Shipping from './pages/Shipping';


export default function Routes() {
    const [web3Context, setWeb3Context] = useState({})
    
    return(
        <BrowserRouter>
        <Switch>
                <Route exact path = "/" component = {Home}/>
                <Route exact path = "/shop" component = {Shop}/>
                <Route exact path = "/shop-detail" component = {ShopDetail}/>
                <Route exact path = "/cart" component = {CartPage}/>
                <Route exact path = "/check-out" component = {CheckoutPage}/>
                <Route exact path = "/shipping-details" component = {Shipping} />
        </Switch>
        </BrowserRouter>
    )
}