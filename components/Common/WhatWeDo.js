import React from 'react';
import Link from 'next/link';

export default function WhatWeDo() {

        return (
            <>
                <section className="services-area ptb-100 bg-F4F7FC">
                    <div className="container">
                        <div className="section-title">
                            <span className="sub-title">What We Do</span>
                            <h2>How We Help People</h2>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-services-box">
                                    <div className="icon">
                                        <i className="flaticon-digital-marketing"></i>
                                    </div>
                                    <h3>
                                            <a>People And Organizational Performance </a>
                                    </h3>


                                    <Link href="https://inyonstaffing.com/">
                                        <a className="read-more-btn">
                                            Read More 
                                            <i className="flaticon-right-arrow"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-services-box">
                                    <div className="icon bg-00aeff">
                                        <i className="flaticon-research"></i>
                                    </div>
                                    <h3>
                                            <a>Grant/Proposal Writing And Administration</a>
                                    </h3>
                                    
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-services-box">
                                    <div className="icon bg-cdf1d8">
                                        <i className="flaticon-analysis"></i>
                                    </div>
                                    <h3>
                                            <a>Compliance And Quality Assurance</a>
                                    </h3>
                                    
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-services-box">
                                    <div className="icon bg-f78acb">
                                        <i className="flaticon-analytics"></i>
                                    </div>
                                    <h3>
                                            <a>Technology And Automation </a>
                                    </h3>
                                    
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-services-box">
                                    <div className="icon bg-c679e3">
                                        <i className="flaticon-mail"></i>
                                    </div>
                                    <h3>
                                            <a>Project Management</a>
                                    </h3>
                                    
                                </div>
                            </div>

                  

                        </div>
                    </div>
                </section>
            </>
        );
    }
