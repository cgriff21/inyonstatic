import React from 'react';
import Link from 'next/link';
import Head from 'next/head'


export default function Error() {

        return (
            <>
            <Head>
               <title>Inyon Solutions</title>
               <link rel="icon" href="/favicon.ico" />
            </Head>
                <section className="error-area">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="error-content">
                                    <img src="/img/404.png" alt="error" />
                
                                    <h3>Page Not Found</h3>
                                    <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>

                                    <Link href="/">
                                        <a className="default-btn">
                                            Go to Home <span></span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }