import React, { Fragment } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
// import Humberger from '../components/Humberger'
import PagePreloader from '../components/Page-preloader'
import HeroSection from '../components/HeroSection'
import Tracking from '../components/Tracking'

export default function Shipping({history}){
    return(
        <Fragment>
            <Header history = {history}/>
            {/* <Humberger /> */}
            <Tracking history = {history}/>
            <Footer />
        </Fragment>
    )
}