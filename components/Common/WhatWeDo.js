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
                                        <i className="icon-people"></i>
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
                                        <i className="icon-grant"></i>
                                    </div>
                                    <h3>
                                            <a>Grant/Proposal Writing And Administration</a>
                                    </h3>
                                    
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-services-box">
                                    <div className="icon bg-cdf1d8">
                                        <i className="icon-compliance"></i>
                                    </div>
                                    <h3>
                                            <a>Compliance And Quality Assurance</a>
                                    </h3>
                                    
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-services-box">
                                    <div className="icon bg-f78acb">
                                        <i className="icon-technology-1"></i>
                                    </div>
                                    <h3>
                                            <a>Technology And Automation </a>
                                    </h3>
                                    
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-services-box">
                                    <div className="icon bg-c679e3">
                                        <i className="icon-project-1"></i>
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
