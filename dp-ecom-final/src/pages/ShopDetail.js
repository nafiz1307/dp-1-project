import React, { Fragment } from 'react'
// import Body from '../components/Body'
import Footer from '../components/Footer'
import Header from '../components/Header'
// import Humberger from '../components/Humberger'
import PagePreloader from '../components/Page-preloader'
import HeroSection from '../components/HeroSection'
import ProductDetail from '../components/ProductDetail'
import RelatedProduct from '../components/RelatedProduct'

export default function ShopDetail(){
    return(
        <Fragment>
            <Header />
            <HeroSection/>
            <ProductDetail/>
            <RelatedProduct/>
            <Footer />
        </Fragment>
    )
}