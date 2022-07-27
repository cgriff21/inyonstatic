import React, { Component } from 'react';
import Head from 'next/head'
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Common/PageHeader';
import ContactForm from '../components/Contact/ContactForm';
import ContactInfo from '../components/Contact/ContactInfo';
import Footer from '../components/Layout/Footer';

class Contact extends Component {
    render() {
        return (
            <>
            <Head>
               <title>Inyon Solutions</title>
               <link rel="icon" href="/favicon.ico" />
            </Head>
                <Navbar />

                <PageHeader 
                    pageTitle="Contact" 
                    breadcrumbTextOne="Home" 
                    breadcrumbUrl="/" 
                    breadcrumbTextTwo="Contact" 
                />
                
                <ContactForm />

                <ContactInfo />
                
                <Footer />
            </>
        );
    }
}

export default Contact;