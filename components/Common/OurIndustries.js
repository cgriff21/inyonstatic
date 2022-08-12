import React from 'react';

export default function OurIndustries() {
        return (
            <>
                <section className="features-area ptb-100 bg-F4F7FC" id="industries">
                    <div className="container">
                        <div className="section-title">
                            <span className="sub-title">Our Industries</span>
                            <h2>Our Industries</h2>
                        </div>

                        <div className="tab features-list-tab ">
                            {/* tabs Nav */}
                            <ul className="tabs justify-content-center ">
                                <li className='self-stretch'>
                                    <div className="bg-c679e3">
                                        <i className="icon-healthcare"></i>
                                        <span>Healthcare</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="bg-fa7070">
                                        <i className="icon-education"></i>
                                        <span>Education</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="bg-eb6b3d">
                                        <i className="icon-public"></i>
                                        <span>State & Local Government</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="bg-00aeff">
                                        <i className="flaticon-analytics"></i>
                                        <span>Non-Profit</span>
                                    </div>
                                </li>
                                <li>
                                    <div onClick={(e) => e.preventDefault()}>
                                        <i className="icon-estate"></i>
                                        <span>Real Estate & Property Management</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="bg-f78acb">
                                        <i className="flaticon-data"></i>
                                        <span>Technology</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="bg-f78acb">
                                        <i className="flaticon-data"></i>
                                        <span>Sustainability</span>
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
