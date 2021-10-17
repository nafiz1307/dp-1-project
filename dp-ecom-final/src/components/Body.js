import React, { useContext, useEffect, useState } from "react"
import axios from 'axios'
import { endpoint } from "../Config/vars"
import { ContextStore } from "../Context/ContextStore"

const Body =()=>{
    const {contextStore, setContextStore} = useContext(ContextStore)
    const [state, setState] = useState({
        products: []
    })
    const { cart, numberOfProductInCart, wishList, numberOfProductInWishList} = contextStore
    useEffect(() => {
        async function fetcProducts(){
           let res = await axios.get(`${endpoint}/api/product/addedProducts`)
           let products =  [...res.data]
           products = await Promise.all(products.map(async(product) => {
            res = await axios.get(`${endpoint}/api/product/${product.cid}`)
            product = {...product, ...JSON.parse(res.data), addedToCart: false, addedToWishList:false}
            return product
       }))
       console.log(products)
           setState({...state, products})
           
        }
    fetcProducts()
        
    },[])
    const onClickWish = (product) => {
        product.addedToWishList = true
        setContextStore({...contextStore, wishList: [...wishList, product], numberOfProductInWishList: numberOfProductInWishList+1})
    }
    const onClickCart = (product) => {
        product.addedToCart = true
        setContextStore({...contextStore, cart: [...cart, product], numberOfProductInCart: numberOfProductInCart + 1})
    }

    return(
        <div>
            {/* <!-- Hero Section Begin --> */}
            
            {/* <!-- Hero Section End -->

            <!-- Categories Section Begin --> */}
            <section className="categories">
                <div className="container">
                    <div className="row">
                        <div className="categories__slider owl-carousel">
                            <div className="col-lg-3">
                                <div className="categories__item set-bg" data-setbg="img/categories/cat-1.jpg">
                                    <h5><a href="#">Fresh Fruit</a></h5>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="categories__item set-bg" data-setbg="img/categories/cat-2.jpg">
                                    <h5><a href="#">Dried Fruit</a></h5>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="categories__item set-bg" data-setbg="img/categories/cat-3.jpg">
                                    <h5><a href="#">Vegetables</a></h5>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="categories__item set-bg" data-setbg="img/categories/cat-4.jpg">
                                    <h5><a href="#">drink fruits</a></h5>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="categories__item set-bg" data-setbg="img/categories/cat-5.jpg">
                                    <h5><a href="#">drink fruits</a></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Categories Section End -->

            <!-- Featured Section Begin --> */}
            <section className="featured spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>Featured Product</h2>
                            </div>
                            <div className="featured__controls">
                                <ul>
                                    <li className="active" data-filter="*">All</li>
                                    <li data-filter=".oranges">Oranges</li>
                                    <li data-filter=".fresh-meat">Fresh Meat</li>
                                    <li data-filter=".vegetables">Vegetables</li>
                                    <li data-filter=".fastfood">Fastfood</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row featured__filter">
                        {state.products.map(product => (
                            <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
                            <div className="featured__item">
                                <div className="featured__item__pic set-bg" ><img src={`https://gateway.ipfs.io/ipfs/${product.imgUri}`}/>
                                    <ul className="featured__item__pic__hover">
                                        {!product.addedToWishList && <li onClick = {() => {onClickWish(product)}}><a href="#"><i className="fa fa-heart"></i></a></li>}
                                        {!product.addedToCart && <li onClick = {() => {onClickCart(product)}}><a href="#"><i className="fa fa-shopping-cart"></i></a></li>}
                                    </ul>
                                </div>
                                <div className="featured__item__text">
                                    <h6><a href="#">{product.name}</a></h6>
                                    <h5>${product.price}</h5>
                                </div>
                            </div>
                        </div>
                        ))}
                        
                    </div>
                </div>
            </section>
            {/* <!-- Featured Section End -->

            <!-- Banner Begin --> */}
            <div className="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="banner__pic">
                                <img src="img/banner/banner-1.jpg" alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="banner__pic">
                                <img src="img/banner/banner-2.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Banner End -->

            <!-- Latest Product Section Begin --> */}
            {/* <!-- Latest Product Section End -->

            <!-- Blog Section Begin --> */}
            
            {/* <!-- Blog Section End --> */}

            {/* <!-- Footer Section Begin --> */}
            
        </div>
    )
}

export default Body