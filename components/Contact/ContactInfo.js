import React from 'react';

export default function ContactInfo() {

        return (
            <section className="pt-100 pb-70">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="contact-info-box">
                                <div className="icon">
                                    <i className="flaticon-email"></i>
                                </div>
                                <h3>Email</h3>
                                <p>
                                    contact@inyon.solutions
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="contact-info-box">
                                <div className="icon">
                                    <i className="flaticon-phone-call"></i>
                                </div>
                                <h3>Location</h3>
                                <p>1255 W Colton Ave, Redlands, CA 92374</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="contact-info-box">
                                <div className="icon">
                                    <i className="flaticon-marker"></i>
                                </div>
                                <h3>Call</h3>
                                <p>+123 456 7890</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
