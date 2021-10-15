import React, { useContext, useState } from 'react'
import { Web3Context } from '../Context/Web3Context';
import Web3 from 'web3'



const Header=({history})=>{
    const {web3Context, setWeb3Context} = useContext(Web3Context)
    const [balance, setBalance] = useState(null)
    const [account, setAccount] = useState(null)
    const connectMetamask = () => {
        ethereum.request({ method: 'eth_requestAccounts' }).then(accounts => {
          setAccount(accounts[0])
          web3 = new Web3(ethereum)
          setWeb3Context(web3)
          web3.eth.getAccounts().then(accounts => web3.eth.getBalance(accounts[0]).then(balance => setBalance(balance)))
          console.log(accounts)
        });
      }
      
    let {ethereum, web3} = window
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
                                        {!web3Context.eth && <a href="#" onClick = {connectMetamask}><i className="fa fa-user"></i> Login with Metamask</a>}
                                        {web3Context.eth && <a href="#"><i className="fa fa-user"></i> Connected to Metamask</a>}
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
                                    <li className="active"><a href="./index.html">Home</a></li>
                                    <li><a href="#" onClick = {() => {history.push('shop')}}>Shop</a></li>
                                    <li><a href="#">Pages</a>
                                        <ul className="header__menu__dropdown">
                                            <li><a href="./shop-details.html">Shop Details</a></li>
                                            <li><a href="./shoping-cart.html">Shoping Cart</a></li>
                                            <li><a href="./checkout.html">Check Out</a></li>
                                            <li><a href="./blog-details.html">Blog Details</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="./blog.html">Blog</a></li>
                                    <li><a href="./contact.html">Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-lg-3">
                            <div className="header__cart">
                                <ul>
                                    <li><a href="#"><i className="fa fa-heart"></i> <span>1</span></a></li>
                                    <li><a href="#"><i className="fa fa-shopping-bag"></i> <span>3</span></a></li>
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