import React from 'react';

export default function OurIndustries() {
        return (
            <>
                <section className="features-area ptb-100 bg-F4F7FC">
                    <div className="container">
                        <div className="section-title">
                            <span className="sub-title">Our Industries</span>
                            <h2>Our Industries</h2>
                        </div>

                        <div className="tab features-list-tab">
                            {/* tabs Nav */}
                            <ul className="tabs">
                                <li>
                                    <div className="bg-fa7070">
                                        <i className="flaticon-achievement"></i>
                                        <span>Education</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="bg-00aeff">
                                        <i className="flaticon-architecture"></i>
                                        <span>Financial Services</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="bg-c679e3">
                                        <i className="flaticon-digital-marketing"></i>
                                        <span>Healthcare</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="bg-eb6b3d">
                                        <i className="flaticon-analytics"></i>
                                        <span>Public/Social Sector</span>
                                    </div>
                                </li>
                                <li>
                                    <div onClick={(e) => e.preventDefault()}>
                                        <i className="flaticon-data"></i>
                                        <span>Real Estate</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="bg-f78acb">
                                        <i className="flaticon-research"></i>
                                        <span>Technology</span>
                                    </div>
                                </li>
                                
                            </ul>


                        </div>
                    </div>

                    {/* Animation Image */}
                    <div className="shape-img7">
                        <img src="/img/banner/shape7.png" alt="image" />
                    </div>
                    <div className="shape-img2">
                        <img src="/img/banner/shape2.svg" alt="image" />
                    </div>
                    <div className="shape-img3">
                        <img src="/img/banner/shape3.svg" alt="image" />
                    </div>
                    <div className="shape-img4">
                        <img src="/img/banner/shape4.png" alt="image" />
                    </div>
                </section>
            </>
        );
    }
