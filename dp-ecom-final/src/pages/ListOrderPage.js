import React, { Fragment } from 'react'
// import Body from '../components/Body'
import Footer from '../components/Footer'
import Header from '../components/Header'
// import Humberger from '../components/Humberger'
import PagePreloader from '../components/Page-preloader'
import HeroSection from '../components/HeroSection'
import ProductDetail from '../components/ProductDetail'
import RelatedProduct from '../components/RelatedProduct'
import OrdersList from '../components/OrderList'
import ListOrder from '../components/ListOrder'

export default function ListOrderPage({history}){
    return(
        <Fragment>
            <Header history = {history} />
            <ListOrder history = {history}/>
        </Fragment>
    )
}