import React, { useContext } from 'react'
import { ContextStore } from '../Context/ContextStore';

const Cart=({history})=>{
    const {contextStore, setContextStore} = useContext(ContextStore)
    const {cart, cartTotal, numberOfProductInCart} = contextStore
    const onClickRemoveFromCart = (product) => {
        setContextStore({...contextStore, cart: cart.filter(element => element.cid !== product.cid), cartTotal: cartTotal - Number(product.price), numberOfProductInCart: numberOfProductInCart - 1})
    }
    return(
        <div>
            {/* <!-- Shoping Cart Section Begin --> */}
    <section class="shoping-cart spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="shoping__cart__table">
                        <table>
                            <thead>
                                <tr>
                                    <th class="shoping__product">Products</th>
                                    <th>Price</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map(product => (
                                    <tr>
                                    <td class="shoping__cart__item">
                                        <img src={`https://gateway.ipfs.io/ipfs/${product.imgUri}`} style ={{height: 200}} alt=""/>
                                        <h5>{product.name}</h5>
                                    </td>
                                    <td class="shoping__cart__price">
                                        ${product.price}
                                    </td>
                                    <td class="shoping__cart__item__close">
                                        <span class="icon_close" onClick = {() => {onClickRemoveFromCart(product)}}></span>
                                    </td>
                                </tr>
                               
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="shoping__cart__btns">
                        <a href="#" class="primary-btn cart-btn" onClick = {() => {history.push("/")}}>CONTINUE SHOPPING</a>
                        <a href="#" class="primary-btn cart-btn cart-btn-right"><span class="icon_loading"></span>
                            Upadate Cart</a>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="shoping__continue">
                        <div class="shoping__discount">
                            <h5>Discount Codes</h5>
                            <form action="#">
                                <input type="text" placeholder="Enter your coupon code"/>
                                <button type="submit" class="site-btn">APPLY COUPON</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="shoping__checkout">
                        <h5>Cart Total</h5>
                        <ul>
                            <li>Subtotal <span>{cartTotal}</span></li>
                        </ul>
                        <a href="#" class="primary-btn" onClick = {() => {history.push("check-out")}}>PROCEED TO CHECKOUT</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Shoping Cart Section End --> */}
        </div>
    )
}

export default Cart;