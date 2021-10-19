import React, { Fragment } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
// import Humberger from '../components/Humberger'
import PagePreloader from '../components/Page-preloader'
import ShopBody from '../components/ShopBody'
import HeroSection from '../components/HeroSection'

export default function Shop({history}){
    return(
        <Fragment>
            {/* <PagePreloader /> */}
            <Header history = {history}/>
            {/* <Humberger /> */}
            {/* <HeroSection/> */}
            <ShopBody history = {history}/>
            <Footer />
        </Fragment>
    )
}