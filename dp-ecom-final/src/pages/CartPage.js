import React, { Fragment } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
// import Humberger from '../components/Humberger'
import PagePreloader from '../components/Page-preloader'
import Cart from '../components/Cart'

export default function CartPage(){
    return(
        <Fragment>
            <PagePreloader />
            <Header />
            <Cart/>
            <Footer />
        </Fragment>
    )
}