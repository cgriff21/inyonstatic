import React, { Component } from 'react';
import Head from 'next/head'
import Navbar from '../components/Layout/Navbar';
import Banner from '../components/Home/Banner';
import FeaturedServices from '../components/Home/FeaturedServices';
import OurServices from '../components/Home/OurServices';
import OurFeaturesTab from '../components/Common/OurFeaturesTab';
import SubscribeStyleThree from '../components/Common/SubscribeStyleThree';
import Footer from '../components/Layout/Footer';
import AboutArea from '../components/Common/AboutArea';


class Index extends Component {
    render() {
        return (
            
            <> 
            <Head>
               <title>Inyon Solutions</title>
               <link rel="icon" href="/favicon.ico" />
            </Head>
                <Navbar />
                <Banner />
                <AboutArea/>
                <FeaturedServices />
                {/* <OurServices /> */}
                <OurFeaturesTab />
                <SubscribeStyleThree />
                <Footer />
            </>
        );
    }
}

export default Index;
