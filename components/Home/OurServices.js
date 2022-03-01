import React, { Component } from 'react';

class OurServices extends Component {
    render() {
        return (
            <>
                <section className="overview-area ptb-100 pt-0">
                    <div className="container">
                        <div className="section-title">
                            {/* <span className="sub-title">About Us</span> */}
                            <h2>About Us</h2>
                            <p>  We leverage the power of entrepreneurship and financial markets, social enterprise,  technology and collective impact to create jobs, fuel income growth, promote sustainability and transform the quality of life for the communities we serve.</p>
                        </div>

                        {/* Our Services One */}
                        <div className="overview-box">
                            <div className="overview-content">
                                <div className="content">
                                    {/* <span className="sub-title">Digital Marketing</span> */}
                                    <h2>What Drives Us</h2>
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
                                    <img src="/images/about-img1.png" alt="image" />
                                </div>
                            </div>
                        </div>

                        {/* Our Services Two */}
                        <div className="overview-box">
                            <div className="overview-image">
                                <div className="image">
                                    <img src="/images/why-choose-img1.png" alt="image" />
                                </div>
                            </div>
                            
                            <div className="overview-content">
                                <div className="content right-content">
                                    {/* <span className="sub-title">Design & Development</span> */}
                                    <h2>Our Values</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>

                                    <ul className="features-list">
                                        <li><span><i className="fas fa-check"></i>Social Contribution</span></li>
                                        <li><span><i className="fas fa-check"></i>Collective Impact</span></li>
                                        <li><span><i className="fas fa-check"></i>Innovation</span></li>
                                        <li><span><i className="fas fa-check"></i> Teamwork</span></li>
                                        <li><span><i className="fas fa-check"></i> Out Of The Box Thinking</span></li>
                                        <li><span><i className="fas fa-check"></i>Fun</span></li>
                                        <li><span><i className="fas fa-check"></i>Willingness</span></li>
                                        <li><span><i className="fas fa-check"></i>Work Life Balance</span></li>
                                        <li><span><i className="fas fa-check"></i>Gratitude</span></li>
                                        <li><span><i className="fas fa-check"></i>Integrity</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                        {/* Our Services Three */}
                        <div className="overview-box">
                        <div className="overview-content">
                                <div className="content ">
                                    {/* <span className="sub-title">Design & Development</span> */}
                                    <h2>Our Brand</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>

                                    <ul className="features-list">
                                        <li><span><i className="fas fa-check"></i>Visionsary</span></li>
                                        <li><span><i className="fas fa-check"></i>Tech Saavy</span></li>
                                        <li><span><i className="fas fa-check"></i>24/7 Global Operations</span></li>
                                        <li><span><i className="fas fa-check"></i> Client Facing</span></li>
                                        <li><span><i className="fas fa-check"></i> Personal Touch</span></li>
                                        <li><span><i className="fas fa-check"></i>Innovative Market Based Solutions</span></li>
                                        <li><span><i className="fas fa-check"></i>Passionate Performance</span></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="overview-image">
                                <div className="image">
                                    <img src="/images/why-choose-img1.png" alt="image" />
                                </div>
                            </div>
                            

                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default OurServices;