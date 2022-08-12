import React, { Component } from 'react';
import Image from 'next/image'
import Link from '../../utils/ActiveLink';

class Navbar extends Component {
    // Navbar
    _isMounted = false;
    state = {
        display: false,
        collapsed: true
    };
    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    componentDidMount() {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

        return (
            <>
               <div id="navbar" className="navbar-area">
                    <div className="adani-nav">
                        <div className="container">
                            <nav className="navbar navbar-expand-md navbar-light">
                                <Link href="/">
                                    <a className="navbar-brand">
                                    <Image src="/img/logo.png" layout="intrinsic" width="182" height="65" />
                                    </a>
                                </Link>

                                <button 
                                    onClick={this.toggleNavbar} 
                                    className={classTwo}
                                    type="button" 
                                    data-toggle="collapse" 
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                                    aria-expanded="false" 
                                    aria-label="Toggle navigation"
                                >
                                    <span className="icon-bar top-bar"></span>
                                    <span className="icon-bar middle-bar"></span>
                                    <span className="icon-bar bottom-bar"></span>
                                </button>

                                <div className={classOne} id="navbarSupportedContent">
                                    <ul className="navbar-nav">
                                    <li className="nav-item">
                                            <Link href="/" activeClassName="active">
                                                <a className="nav-link">Home</a>
                                            </Link>
                                        </li>
                                      
                                        <li className="nav-item">
                                            <Link href="/#about" activeClassName="active">
                                                <a className="nav-link">About Us</a>
                                            </Link>
                                        </li>
                                        
                                        <li className="nav-item">
                                            <Link href="/#services" activeClassName="active">
                                                <a className="nav-link">Services</a>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link href="/#social-impact" activeClassName="active">
                                                <a className="nav-link">Social Impact</a>
                                            </Link>
                                        </li>
                                        
                                        <li className="nav-item">
                                            <Link href="/#industries" activeClassName="active">
                                                <a className="nav-link">Industries</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="https://inyonstaffing.zohorecruit.com/jobs/Careers" activeClassName="active">
                                                <a className="nav-link">Careers</a>
                                            </Link>
                                        </li>
                                        
                                        <li className="nav-item">
                                            <Link href="/contact" activeClassName="active">
                                                <a className="nav-link">Contact</a>
                                            </Link>
                                        </li>

  

{/* 
                                        <li className="nav-item">
                                            <Link href="/">
                                                <a className="nav-link" onClick={e => e.preventDefault()}>
                                                    Employee Services <i className="fas fa-chevron-down"></i>
                                                </a>
                                            </Link>
                                            
                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <a className="nav-link" href="https://login.wheniwork.com/">Employee Schedule</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="https://pdf.ac/8CBht">Employee Forms</a>
                                                </li>
                                            </ul>
                                        </li> */}

                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>


            </>
        );
    }
}


export default Navbar;

// export default Navbar;
