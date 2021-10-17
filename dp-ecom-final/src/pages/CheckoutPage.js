import React, { Fragment } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
// import Humberger from '../components/Humberger'
import PagePreloader from '../components/Page-preloader'
import Checkout from '../components/Checkout'

export default function CheckoutPage({history}){
    return(
        <Fragment>
            <Header history = {history}/>
            <Checkout history = {history}/>
            <Footer />
        </Fragment>
    )
}