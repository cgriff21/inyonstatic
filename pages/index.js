// import React from 'react';
// import Head from 'next/head'
// import Navbar from '../components/Layout/Navbar';
// import Banner from '../components/Layout/Banner';
// import OurInitiatives from '../components/Common/OurInitiatives';
// import OurIndustries from '../components/Common/OurIndustries';
// import Subscribe from '../components/Common/Subscribe';
// import Footer from '../components/Layout/Footer';
// import About from '../components/Common/About';
// import WhatWeDo from '../components/Common/WhatWeDo';


// export default function Home() {
//         return (
            
//             <> 
//             <Head>
//                <title>Inyon Solutions</title>
//                <link rel="icon" href="/favicon.ico" />
//             </Head>
//                 <Navbar />
//                 <Banner />
//                 <WhatWeDo />
//                 <About/>
//                 <OurIndustries />
//                 <OurInitiatives />
//                 <Subscribe />
//                 <Footer />
//             </>
//         );
//     }



import React from 'react';
import Head from 'next/head'
import Navbar from '../components/Layout/Navbar';
import Banner from '../components/Layout/Banner2';
import OurInitiatives from '../components/Common/OurInitiatives';
import OurIndustries from '../components/Common/OurIndustries';
import CTA from '../components/Common/CTA';
import Footer from '../components/Layout/Footer';
import About from '../components/Common/About';
import WhatWeDo from '../components/Common/WhatWeDo';


export default function Home() {
        return (
            
            <> 
            <Head>
               <title>Inyon Solutions</title>
               <link rel="icon" href="/favicon.ico" />
            </Head>
                <Navbar />
                <Banner />
                <WhatWeDo />
                <About/>
                <OurIndustries />
                <OurInitiatives />
                <CTA />
                <Footer />
            </>
        );
    }