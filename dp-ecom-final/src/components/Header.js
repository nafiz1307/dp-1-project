import React, { useContext, useState } from 'react'

import { ContextStore } from '../Context/ContextStore';
import {ethers} from  "ethers"
import { fungibleTokenAbi, fungibleTokenAddress, supplyChainContractAddress, supplyChainSmartContractAbi } from '../Config/vars';



const Header=({history})=>{
    const {contextStore, setContextStore} = useContext(ContextStore)
    const [balance, setBalance] = useState(null)
    const [connected, setConnected] = useState(false)
    const {account, numberOfProductInCart, numberOfProductInWishList} = contextStore
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
                setBalance(balance.toString())
                setConnected(true)
                setContextStore({...contextStore, account, erc20, supplyChain})
            }).catch(err => {
                console.log(err)
            })
        })
        
      }
      
    return(
        <div>
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
                                <a href="./index.html"><img src="img/logo.png" alt=""/></a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <nav className="header__menu">
                                <ul>
                                    <li className="active">Home</li>
                                    <li onClick = {() => {history.push('shop')}}>Shop</li>
                                    <li>Pages
                                        <ul className="header__menu__dropdown">
                                            <li><>Shop Details</></li>
                                            <li><>Shoping Cart</></li>
                                            <li><>Check Out</></li>
                                            <li><>Blog Details</></li>
                                        </ul>
                                    </li>
                                    <li>Blog</li>
                                    <li>Contact</li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-lg-3">
                            <div className="header__cart">
                                <ul>
                                    <li><a ><i className="fa fa-heart"></i> <span>{contextStore.numberOfProductInWishList}</span></a></li>
                                    <li><a ><i className="fa fa-shopping-bag"></i> <span>{contextStore.numberOfProductInCart}</span></a></li>
                                </ul>
                                <div className="header__cart__price">item: <span>$150.00</span></div>
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