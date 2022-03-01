import React, { Component } from 'react';
import Link from 'next/link';

class OurFeaturesTab extends Component {

    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs_item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        evt.currentTarget.className += "current";
    }

    render() {
        return (
            <>
                <section className="features-area ptb-100 pt-0">
                    <div className="container">
                        <div className="section-title">
                            <span className="sub-title">Our Industries</span>
                            <h2>Our Industries</h2>
                        </div>

                        <div className="tab features-list-tab">
                            {/* tabs Nav */}
                            <ul className="tabs">
                                <li
                                    className="current"
                                    onClick={(e) => this.openTabSection(e, 'tab1')}
                                >
                                    <div className="bg-fa7070">
                                        <i className="flaticon-achievement"></i>
                                        <span>Education</span>
                                    </div>
                                </li>
                                <li onClick={(e) => this.openTabSection(e, 'tab2')}>
                                    <div className="bg-00aeff">
                                        <i className="flaticon-architecture"></i>
                                        <span>Financial Services</span>
                                    </div>
                                </li>
                                <li onClick={(e) => this.openTabSection(e, 'tab3')}>
                                    <div className="bg-c679e3">
                                        <i className="flaticon-digital-marketing"></i>
                                        <span>Healthcare</span>
                                    </div>
                                </li>
                                <li onClick={(e) => this.openTabSection(e, 'tab4')}>
                                    <div className="bg-eb6b3d">
                                        <i className="flaticon-analytics"></i>
                                        <span>Public/Social Sector</span>
                                    </div>
                                </li>
                                <li onClick={(e) => this.openTabSection(e, 'tab5')}>
                                    <div onClick={(e) => e.preventDefault()}>
                                        <i className="flaticon-data"></i>
                                        <span>Real Estate</span>
                                    </div>
                                </li>
                                <li onClick={(e) => this.openTabSection(e, 'tab6')}>
                                    <div className="bg-f78acb">
                                        <i className="flaticon-research"></i>
                                        <span>Technology</span>
                                    </div>
                                </li>
                            </ul>

                            {/* Tab Content */}
                            <div className="tab_content">
                                {/* Tabs Item 01 */}
                                <div id="tab1" className="tabs_item">
                                    <div className="features-overview">
                                        <div className="overview-content">
                                            <div className="content">
                                                {/* <span className="sub-title">Education</span> */}
                                                <h2>Education</h2>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>

                                                <ul className="features-list">
                                                    <li><span><i className="flaticon-tick"></i> Open Source</span></li>
                                                    <li><span><i className="flaticon-tick"></i> Optimal Choice</span></li>
                                                    <li><span><i className="flaticon-tick"></i> High Security</span></li>
                                                    <li><span><i className="flaticon-tick"></i> Great Advices</span></li>
                                                    <li><span><i className="flaticon-tick"></i> Creative Layout</span></li>
                                                    <li><span><i className="flaticon-tick"></i> Super Responsive</span></li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="overview-image">
                                            <div className="image">
                                                <img src="/img/feature-image1.png" alt="image" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Tabs Item 02 */}
                                <div id="tab2" className="tabs_item">
                                    <div className="features-overview">
                                        <div className="overview-image">
                                            <div className="image">
                                                <img src="/img/feature-image2.png" alt="image" />
                                            </div>
                                        </div>

                                        <div className="overview-content">
                                            <div className="content">
                                                {/* <span className="sub-title">Define Your Choices</span> */}
                                                <h2>Financial Services</h2>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>

                                                <ul className="features-list">
                                                    <li><span><i className="flaticon-tick"></i> Open Source</span></li>
                                                    <li><span><i className="flaticon-tick"></i> Optimal Choice</span></li>
                                                    <li><span><i className="flaticon-tick"></i> High Security</span></li>
                                                    <li><span><i className="flaticon-tick"></i> Great Advices</span></li>
                                                    <li><span><i className="flaticon-tick"></i> Creative Layout</span></li>
                                                    <li><span><i className="flaticon-tick"></i> Super Responsive</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Tabs Item 03 */}
                                <div id="tab3" className="tabs_item">
                                    <div className="features-overview">
                                        <div className="overview-content">
                                            <div className="content">
                                                {/* <span className="sub-title">Define Your Choices</span> */}
                                                <h2>Health Care</h2>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>

                                                <ul className="features-list">
                                                    <li><span><i className="flaticon-tick"></i> Open Source</span></li>
                                                    <li><span><i className="flaticon-tick"></i> Optimal Choice</span></li>
                                                    <li><span><i className="flaticon-tick"></i> High Security</span></li>
                                                    <li><span><i className="flaticon-tick"></i> Great Advices</span></li>
                                                    <li><span><i className="flaticon-tick"></i> Creative Layout</span></li>
                                                    <li><span><i className="flaticon-tick"></i> Super Responsive</span></li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="overview-image">
                                            <div className="image">
                                                <img src="/img/feature-image3.png" alt="image" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Tabs Item 04 */}
                                <div id="tab4" className="tabs_item">
                                    <div className="features-overview">
                                        <div className="overview-image">
                                            <div className="image">
                                                <img src="/img/feature-image4.png" alt="image" />
                                            </div>
                                        </div>
                                        
                                        <div className="overview-content">
                                            <div className="content">
                                                {/* <span className="sub-title">Define Your Choices</span> */}
                                                <h2>Pulic And Social Sector</h2>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>

                                                <ul className="features-list">
                                                    <li><span><i className="flaticon-tick"></i> Open Source</span></li>
                                                    <li><span><i className="flaticon-tick"></i> Optimal Choice</span></li>
                                                    <li><span><i className="flaticon-tick"></i> High Security</span></li>
                                                    <li><span><i className="flaticon-tick"></i> Great Advices</span></li>
                                                    <li><span><i className="flaticon-tick"></i> Creative Layout</span></li>
                                                    <li><span><i className="flaticon-tick"></i> Super Responsive</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Tabs Item 05 */}
                                <div id="tab5" className="tabs_item">
                                    <div className="features-overview">
                                        <div className="overview-content">
                                            <div className="content">
                                                {/* <span className="sub-title">Define Your Choices</span> */}
                                                <h2>Real Estate</h2>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>

                                                <ul className="features-list">
                                                    <li><span><i className="flaticon-tick"></i> Open Source</span></li>
                                                    <li><span><i className="flaticon-tick"></i> Optimal Choice</span></li>
                                                    <li><span><i className="flaticon-tick"></i> High Security</span></li>
                                                    <li><span><i className="flaticon-tick"></i> Great Advices</span></li>
                                                    <li><span><i className="flaticon-tick"></i> Creative Layout</span></li>
                                                    <li><span><i className="flaticon-tick"></i> Super Responsive</span></li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="overview-image">
                                            <div className="image">
                                                <img src="/img/feature-image5.png" alt="image" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Tabs Item 06*/}
                                <div id="tab6" className="tabs_item">
                                    <div className="features-overview">
                                        <div className="overview-image">
                                            <div className="image">
                                                <img src="/img/feature-image6.png" alt="image" />
                                            </div>
                                        </div>

                                        <div className="overview-content">
                                            <div className="content">
                                                {/* <span className="sub-title">Define Your Choices</span> */}
                                                <h2>Technology, Media And Telecommunications</h2>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>

                                                <ul className="features-list">
                                                    <li><span><i className="flaticon-tick"></i> Open Source</span></li>
                                                    <li><span><i className="flaticon-tick"></i> Optimal Choice</span></li>
                                                    <li><span><i className="flaticon-tick"></i> High Security</span></li>
                                                    <li><span><i className="flaticon-tick"></i> Great Advices</span></li>
                                                    <li><span><i className="flaticon-tick"></i> Creative Layout</span></li>
                                                    <li><span><i className="flaticon-tick"></i> Super Responsive</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
}

export default OurFeaturesTab;