import React, { useContext, useState } from 'react'

import { ContextStore } from '../Context/ContextStore';
import {ethers} from  "ethers"
import { fungibleTokenAbi, fungibleTokenAddress, supplyChainContractAddress, supplyChainSmartContractAbi } from '../Config/vars';



const Header=({history})=>{
    const {contextStore, setContextStore} = useContext(ContextStore)
    const {account, numberOfProductInCart, numberOfProductInWishList, balance, cartTotal} = contextStore
    const connectMetamask = () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const erc20 = new ethers.Contract(
            fungibleTokenAddress,
            fungibleTokenAbi,
            signer
        );
        const supplyChain = new ethers.Contract(
            supplyChainContractAddress,
            supplyChainSmartContractAbi,
            signer
        )
        signer.getAddress().then(account => {
            erc20.balanceOf(account).then(balance => {
                setContextStore({...contextStore, account, erc20, supplyChain, balance: balance.toString()})
            }).catch(err => {
                console.log(err)
            })
        })
        
      }
      
    return(
        <div>
            {console.log(account)}
            {/* <!-- Header Section Begin --> */}
            <header className="header">
                <div className="header__top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="header__top__left">
                                    <ul>
                                        <li><i className="fa fa-envelope"></i> BitCommerce</li>
                                        <li>Buy and Sell Securely Powered By Etherium</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="header__top__right">
                                    <div className="header__top__right__auth">
                                        {!account && <a href="#" onClick = {connectMetamask}><i className="fa fa-user"></i> Login with Metamask</a>}
                                        {account && <a href="#"><i className="fa fa-user"></i> Connected to Metamask</a>}
                                        {balance && <a href="#"><i class="fas fa-coins"></i> {balance}</a>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="header__logo">
                            <img src="https://i.ibb.co/XXHRw37/1309289.png" alt="1309289" border="0" height={50}/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <nav className="header__menu">
                                <ul>
                                    <li className="active" onClick = {() => {history.push("")}}>Home</li>
                                    <li className="active" onClick = {() => {history.push("/orders")}}>Orders</li>
                                   
                                </ul>
                            </nav>
                        </div>
                        <div className="col-lg-3">
                            <div className="header__cart">
                                <ul>
                                    <li><a ><i className="fa fa-shopping-bag" onClick = {() => history.push("cart")}></i> <span>{numberOfProductInCart}</span></a></li>
                                </ul>
                                <div className="header__cart__price">item: <span>${cartTotal}</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="humberger__open">
                        <i className="fa fa-bars"></i>
                    </div>
                </div>
            </header>
            {/* <!-- Header Section End --> */}
        </div>
    )
}

export default Header;