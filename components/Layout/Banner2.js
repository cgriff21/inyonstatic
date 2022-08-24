import React from 'react';
import Link from 'next/link';

const Banner2 = () => {
        return (
            <div className="hero-banner">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container mt-50">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="banner-content">
                                        <h1>Inyon Solutions Global</h1>
                                        <p>Inyon Solutions Global (ISG) is an economic development company transforming communities worldwide by creating innovative business solutions to social challenges.</p>
                                        
                                        <div className="banner-btn">
                                            <Link href="/contact">
                                                <a className="default-btn mr-3">
                                                    Get Started <span></span>
                                                </a>
                                            </Link>
                                            
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                        <div className="animate-image">
                                            <img src="/img/banner2/banner2.jpg" alt="image" />
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
                {/* Shape Images */}
                <div className="shape-img2">
                    <img src="/img/banner2/shape2.svg" alt="image" />
                </div>
                <div className="shape-img3">
                    <img src="/img/banner2/shape3.svg" alt="image" />
                </div>
                <div className="shape-img4">
                    <img src="/img/banner2/shape4.png" alt="image" />
                </div>
                <div className="shape-img5">
                    <img src="/img/banner2/shape5.png" alt="image" />
                </div>
                <div className="shape-img6">
                    <img src="/img/banner2/shape6.png" alt="image" />
                </div>
                <div className="shape-img7">
                    <img src="/img/banner2/shape7.png" alt="image" />
                </div>
                <div className="shape-img8">
                    <img src="/img/banner2/shape8.png" alt="image" />
                </div>
                <div className="shape-img9">
                    <img src="/img/banner2/shape9.png" alt="image" />
                </div>
                <div className="shape-img10">
                    <img src="/img/banner2/shape10.png" alt="image" />
                </div>
                <div className="shape-img11">
                    <img src="/img/banner2/shape11.png" alt="image" />
                </div>
                <div className="shape-img12">
                    <img src="/img/banner2/shape12.png" alt="image" />
                </div>
            </div>
        );
    }

export default Banner2;