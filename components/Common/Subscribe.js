import React from 'react';

export default function Subscribe() {

        return (
            <section className="free-trial-area ptb-100 bg-f4f7fe">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="ft-img">
                                <img src="/img/subscribe.png" alt="Image" />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="subscribe-content">
                                <span className="sub-title">Stay in the know!</span>
                                <h2>Get constant updates from our newsletter</h2>
        
                                <form className="newsletter-form">
                                    <input type="email" className="input-newsletter" placeholder="Enter your email" name="email" required />
        
                                    <button type="submit">Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
