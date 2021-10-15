import React, { Fragment } from 'react'
import Body from '../components/Body'
import Footer from '../components/Footer'
import Header from '../components/Header'
// import Humberger from '../components/Humberger'
import PagePreloader from '../components/Page-preloader'
import HeroSection from '../components/HeroSection'

export default function Home({history}){
    return(
        <Fragment>
            <PagePreloader />
            <Header history = {history}/>
            <Body />
            <Footer />
        </Fragment>
    )
}