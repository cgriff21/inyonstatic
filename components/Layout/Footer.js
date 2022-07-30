import React from 'react';
import Link from 'next/link';

export default function Footer() {

        let currentYear = new Date().getFullYear();
        return (
            <>
                <section className="footer-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="single-footer-widget">
                                    <h3>Contact Info</h3>

                                    <ul className="footer-contact-info">
                                        <li>
                                            <i className="flaticon-phone-call"></i>
                                            <span>Mon to Fri : 10:00AM - 06:00PM</span>
                                           
                                            <a href="tel:1235421457852">+123 54214 578 52</a>
                                        </li>
                                        <li>
                                            <i className="flaticon-email"></i>
                                            <span>Do You Have a Question?</span>
                                            <a href="mailto:contact@inyon.solutions">contact@inyon.solutions</a>
                                        </li>
                                        <li>
                                            <i className="flaticon-social-media"></i>
                                            <span>Socials Network</span>

                                            <ul className="social">
                                                <li>
                                                    <a href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f"></i></a>
                                                </li>
                                                <li>
                                                    <a href="https://twitter.com/" target="_blank"><i className="fab fa-twitter"></i></a>
                                                </li>
                                                <li>
                                                    <a href="https://www.linkedin.com/" target="_blank"><i className="fab fa-linkedin"></i></a>
                                                </li>
                                                <li>
                                                    <a href="https://www.youtube.com/" target="_blank"><i className="fab fa-youtube"></i></a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="single-footer-widget pl-5">
                                    <h3>Quick Links</h3>

                                    <ul className="footer-quick-links">
                                        <li>
                                            <Link href="/">
                                                <a>Home</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/#about">
                                                <a>About</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <a href="https://isgstaffing.net/">Staffing</a>
                                        </li>
                                        <li>
                                            <a href="https://login.wheniwork.com/">Employee Schedule</a>
                                        </li>
                                        <li>
                                            <Link href="/contact">
                                                <a>Contact</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <a href="https://pdf.ac/8CBht">Employee Forms</a>
                                        </li>
                                        <li>
                                            <Link href="/privacy-policy">
                                                <a>Privacy Policy</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/terms-and-conditions">
                                                <a>Terms and Conditions</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="copyright-area">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-sm-6 col-md-6">
                                    <p>
                                        Copyright &copy;{currentYear} Inyon Solutions Global 
                                    </p>
                                </div>

                                <div className="col-lg-6 col-sm-6 col-md-6">
                                    <ul>
                                        <li>
                                            <Link href="/terms-and-conditions">
                                                <a>Terms & Conditions</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/privacy-policy">
                                                <a>Privacy Policy</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
