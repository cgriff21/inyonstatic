import React, { Component } from 'react';

class AboutArea extends Component {
    render() {
        return (
            <>
                <section className="about-area ptb-100" id='about'>
                    <div className="container">
                    <div className="overview-box">
                            <div className="overview-content">
                                <div className="content">
                                    <span className="sub-title">About Us</span>
                                    <h2>What Drives Inyon</h2>
                                    <p>Inyon is a mission driven private economic and community development company that creates innovative, sustainable approaches to society's greatest challenges.</p>

                                    <div className="features-text">
                                        <h4><i className="flaticon-tick"></i> Our Purpose</h4>
                                        <p>Creating innovative solutions that create health, wealth and joy for our global family and the people we serve all over the world.</p>
                                    </div>

                                    <div className="features-text">
                                        <h4><i className="flaticon-tick"></i> Our Mission</h4>
                                        <p>To help our clients make lasting and substantial improvements that increase their influence, impact and income.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="overview-image">
                                <div className="image">
                                    <img src="/img/about3.png" alt="image" />
                                </div>
                            </div>
                        </div>

                        <div className="about-inner-area">
                            <div className="row justify-content-center">
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="about-text">
                                        <h3>Our Values</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore    </p>
                                        
                                        <ul className="features-list">
                                            <li><i className="flaticon-tick"></i> Social Contribution</li>
                                            <li><i className="flaticon-tick"></i> Collective Impact</li>
                                            <li><i className="flaticon-tick"></i> Innovation</li>
                                            <li><i className="flaticon-tick"></i>Teamwork</li>
                                            <li><i className="flaticon-tick"></i>Out Of The Box Thinking</li>
                                            <li><i className="flaticon-tick"></i>Fun- We do our best work when we are engaged and having fun. We do what we love – and it shows.</li>
                                            <li><i className="flaticon-tick"></i>Willingness to do whatever it takes to get the job done </li>
                                            <li><i className="flaticon-tick"></i>Work Life Balance</li>
                                            <li><i className="flaticon-tick"></i>Gratitude-We are grateful for each other, our people, clients, partners and the communities we serve.</li>
                                            <li><i className="flaticon-tick"></i>Integrity: We do the right thing.</li>

                                        </ul>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="about-text">
                                        <h3>Our Brand</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                                        
                                        <ul className="features-list">
                                            <li><i className="flaticon-tick"></i>Visionary</li>
                                            <li><i className="flaticon-tick"></i>Tech Saavy</li>
                                            <li><i className="flaticon-tick"></i> 24/7 Global Operations</li>
                                            <li><i className="flaticon-tick"></i> Client Facing Value Added</li>
                                            <li><i className="flaticon-tick"></i> Personal Touch</li>
                                            <li><i className="flaticon-tick"></i> Innovative Market Based Solutions</li>
                                            <li><i className="flaticon-tick"></i> Passionate Performance: We love What We Do And It Shows</li>

                                        </ul>
                                    </div>
                                </div>
{/* 
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="about-text">
                                        <h3>Industries</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                                        
                                        <ul className="features-list">
                                            <li><i className="flaticon-tick"></i> Stay real. Always.</li>
                                            <li><i className="flaticon-tick"></i> We have you covered</li>
                                            <li><i className="flaticon-tick"></i> We turn heads</li>
                                            <li><i className="flaticon-tick"></i> Your brand, promoted</li>
                                        </ul>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>

                    {/* Animation Shape Images */}
                    <div className="shape-img3">
                        <img src="/img/banner/shape3.svg" alt="image" />
                    </div>
                    <div className="shape-img2">
                        <img src="/img/banner/shape2.svg" alt="image" />
                    </div>
                </section>
            </>
        );
    }
}

export default AboutArea;