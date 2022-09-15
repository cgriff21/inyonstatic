import React from 'react';
import Link from 'next/link';

const CTA = () => {
        return (
            <section className="subscribe-area bg-F4F7FC">
                <div className="subscribe-inner-area lets-work jarallax">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <span className="sub-title">Want To Learn More?</span>
                                <h2>Contact Us</h2>
                            </div>

                            <div className="col-lg-6">
                                <div className="contact-btn">
                                    <Link href="/contact">
                                        <a className="default-btn">
                                            Contact Us <span></span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }


export default CTA;