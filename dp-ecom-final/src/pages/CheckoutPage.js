import React, { Fragment } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
// import Humberger from '../components/Humberger'
import PagePreloader from '../components/Page-preloader'
import Checkout from '../components/Checkout'

export default function CheckoutPage(){
    return(
        <Fragment>
            <PagePreloader />
            <Header />
            <Checkout/>
            <Footer />
        </Fragment>
    )
}