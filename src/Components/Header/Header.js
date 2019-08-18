import React from 'react';
import './Header.scss';

const Header = () => {
    return (
        <div className="header">
            <div className="header-subsection">
                <section className="logo-section">
                    <button className="menu-style">
                        <span className="header-icons">menu</span>
                    </button>
                    <a className="logo-image" href="https://www.silvercar.com/"> </a>
                </section>
                <section className="account-section">
                    <div className="pill">
                        <a href="/signup" className="pill-content">Sign Up</a>
                        | 
                        <a href="/login" className="pill-content">Login</a>
                    </div>
                    <a href="https://support.silvercar.com/hc/en-us" className="help-link">Help</a>
                </section>
            </div>
        </div>
    )
}

export default Header;