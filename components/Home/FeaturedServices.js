import React, { Component } from 'react';

class FeaturedServices extends Component {
    render() {
        return (
            <>
                <section className="featured-services-area ptb-100">
                    <div className="container">
                        <div className="section-title">
                            <span className="sub-title">Initiatives</span>
                            <h2>Our Initiatives</h2>
                            <p>Our ground breaking initiatives create jobs, revitalize neighborhoods,  and transform communities by addressing several of society's most challenging issues including:</p>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-sm-6 col-md-6">
                                <div className="single-featured-box">
                                    <div className="icon">
                                        <i className="flaticon-analytics"></i>
                                    </div>

                                    <h3>Economic Inequality</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>

                                    <a href="/service-details" className="default-btn">Read More <span></span></a>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6 col-md-6">
                                <div className="single-featured-box">
                                    <div className="icon color-facd60">
                                        <i className="flaticon-mail"></i>
                                    </div>

                                    <h3>Housing Affordability</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>

                                    <a href="/service-details" className="default-btn">Read More <span></span></a>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6 col-md-6">
                                <div className="single-featured-box">
                                    <div className="icon color-1ac0c6">
                                        <i className="flaticon-research"></i>
                                    </div>

                                    <h3>Healthcare and wellness</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>

                                    <a href="/service-details" className="default-btn">Read More <span></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default FeaturedServices;