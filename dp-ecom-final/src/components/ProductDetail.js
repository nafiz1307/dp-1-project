import React, { useContext }  from "react"
import { ContextStore } from "../Context/ContextStore"

const ProductDetail=({history})=>{
    const {contextStore, setContextStore} = useContext(ContextStore)
    const {product, cart, numberOfProductInCart, cartTotal} = contextStore
    const addToCart = () => {
        setContextStore({...contextStore, cart: [...cart, product],numberOfProductInCart: numberOfProductInCart + 1, cartTotal: cartTotal+Number(product.price)})
        history.push("/")
    }
    return(
        <div>
            {/* <!-- Product Details Section Begin --> */}
    <section class="product-details spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-6">
                    <div class="product__details__pic">
                        <div class="product__details__pic__item">
                            <img class="product__details__pic__item--large"
                                src={`https://gateway.ipfs.io/ipfs/${product.imgUri}`} alt=""/>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6">
                    <div class="product__details__text">
                        <h3>{product.name}</h3>
                        <div class="product__details__price">{product.price}</div>
                        <p>{product.description}</p>
                        <div class="product__details__quantity">
                        </div>
                        <button class="primary-btn" onClick = {addToCart}>ADD TO CART</button>
                        <ul>
                            <li><b>Availability</b> <span>In Stock</span></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-12">
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Product Details Section End --> */}
    </div>
    )
}

export default ProductDetail