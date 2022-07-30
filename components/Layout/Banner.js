import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Link from 'next/link';

export default function Banner() {

        return (
            <div className="hero-banner banner-bg1">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-12">
                                    <div className="hero-banner-content">
                                        <span className="sub-title">Welcome to </span>
                                        <h1>Inyon Solutions Global</h1>
                                        <p>Inyon Solutions Global (ISG) is an economic development company transforming communities worldwide by creating innovative business solutions to social challenges. </p>

                                        <div className="btn-box">
                                            <Link href="/contact">
                                                <a className="default-btn">Get Started <span></span></a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-12">
                                    <div className="hero-banner-image">
                                        <ScrollAnimation animateIn="fadeInDown" delay={50} animateOnce={true}>
                                            <img src="/img/banner/main.png" alt="main" />
                                        </ScrollAnimation>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shape Images */}
                <div className="shape-img1">
                    <ScrollAnimation animateIn="fadeInUp" delay={100} animateOnce={true}>
                        <img src="/img/banner/shape1.png" alt="image" />
                    </ScrollAnimation>
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
                <div className="shape-img5">
                    <img src="/img/banner/shape5.png" alt="image" />
                </div>
                <div className="shape-img6">
                    <img src="/img/banner/shape6.png" alt="image" />
                </div>
                <div className="shape-img7">
                    <img src="/img/banner/shape7.png" alt="image" />
                </div>
                <div className="shape-img8">
                    <img src="/img/banner/shape8.png" alt="image" />
                </div>
                <div className="shape-img9">
                    <img src="/img/banner/shape9.png" alt="image" />
                </div>
                <div className="shape-img10">
                    <img src="/img/banner/shape10.png" alt="image" />
                </div>
            </div>
        );
    }
