import '../assets/css/bootstrap.min.css';
import '../assets/css/fontawesome.min.css';
import '../assets/css/animate.min.css';
import '../assets/css/flaticon.css';
import '../assets/css/iconmoon.css';
import '../assets/css/boxicons.min.css';
import 'react-toastify/dist/ReactToastify.css';
import '../node_modules/react-modal-video/scss/modal-video.scss';
import 'react-accessible-accordion/dist/fancy-example.css';
import 'react-image-lightbox/style.css';
import '../node_modules/react-modal-video/css/modal-video.min.css';

import '../assets/css/style.css';
import '../assets/css/responsive.css';
import App from 'next/app';
import Head from 'next/head';
import Loader from '../components/Shared/Loader';
import GoTop from '../components/Shared/GoTop';


    class MyApp extends App {

        // Preloader
        state = {
            loading: true
        };
        componentDidMount() {
            this.timerHandle = setTimeout(() => this.setState({ loading: false }), 1000); 
        }
        componentWillUnmount() {
            if (this.timerHandle) {
                clearTimeout(this.timerHandle);
                this.timerHandle = 0;
            }
        }
        
        render () {
            const { Component, pageProps } = this.props

            return (
                <>
                    <Head>
                        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                        <title>Inyon Solutions</title>
                    </Head>

                    {/* <Provider> */}
                        <Component {...pageProps} />
                    {/* </Provider> */}
                    
                    {/* Preloader */}
                    <Loader loading={this.state.loading} />

                    {/* Go Top Button */}
                    <GoTop scrollStepInPx="50" delayInMs="16.66" />
                </>
            );
        }
    }
 export default MyApp;