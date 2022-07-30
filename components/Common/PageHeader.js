import React from 'react';
import Link from 'next/link';

export default function PageHeader(props) {
        
        let { pageTitle, breadcrumbTextOne, breadcrumbTextTwo, breadcrumbUrl } = props;
        return (
            <>
                <div className="page-title-area page-title-bg2">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="page-title-content">
                                    <h2>{pageTitle}</h2>
                                    <ul>
                                        <li>
                                            <Link href={breadcrumbUrl}>
                                                <a>{breadcrumbTextOne}</a>
                                            </Link>
                                        </li>
                                        <li>{breadcrumbTextTwo}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Animation Shape Image */}
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
            </>
        );
    }
