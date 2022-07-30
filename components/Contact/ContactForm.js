import React from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';


export default function ContactForm() {

    const onSubmit = (e) => {
        e.preventDefault();
        return axios
        .post(`/api/contact`, {
                name: e.target.name.value,
                email: e.target.email.value,
                phone: e.target.phone.value,
                subject: e.target.subject.value,
                message: e.target.message.value
        }).then(res => {
            res.status === 200 ? toast.success('Your message has been sumbitted', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            }) : ''

        });
    }

        return (
            <>
                <section className="contact-area ptb-100">
                <ToastContainer />
                    <div className="container">
                        <div className="section-title">
                            <span className="sub-title">Contact Us</span>
                            <h2>Send us a Message</h2>
                            <p>An Inyon team member will be in touch with you shortly.</p>
                        </div>

                        <div className="row align-items-center">
                            <div className="col-lg-4 col-md-4">
                                <div className="contact-image">
                                    <img src="/img/contact.png" alt="image" />
                                </div>
                            </div>

                            <div className="col-lg-8 col-md-8">
                                <div className="contact-form">
                                    <form 
                                        id="contactForm" 
                                        onSubmit={onSubmit}
                                    >
                                        <div className="row">
                                            <div className="col-lg-6 col-md-12">
                                                <div className="form-group">
                                                    <input 
                                                        type="text" 
                                                        name="name"
                                                        className="form-control" 
                                                        placeholder="Name" 
                                                        required
                                                        id="name"  
                                                        aria-label="name"
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-md-12">
                                                <div className="form-group">
                                                    <input 
                                                        type="email" 
                                                        name="email"
                                                        className="form-control" 
                                                        required 
                                                        placeholder="Email" 
                                                        id="email"  
                                                        aria-label="email"
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-md-6">
                                                <div className="form-group">
                                                    <input 
                                                        type="text"
                                                        name="phone" 
                                                        className="form-control" 
                                                        placeholder="Phone" 
                                                        id="phone"  
                                                        aria-label="phone"
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-md-6">
                                                <div className="form-group">
                                                    <input 
                                                        type="text" 
                                                        name="subject"
                                                        className="form-control" 
                                                        placeholder="Subject" 
                                                        id="subject"  
                                                        aria-label="subject"
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <textarea 
                                                        name="message" 
                                                        className="form-control" 
                                                        id="message" 
                                                        cols="30" 
                                                        required
                                                        rows="5"  
                                                        placeholder="Your Message" 
                                                        aria-label="message"
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-lg-12 col-md-12 text-center">
                                                <button type="submit" className="default-btn">
                                                    Send Message <span></span>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
