import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <div>
            <div className="booking-nav">
                <div className="nav-item-container">
                    <div className='nav-item active'>
                        <span className='nav-item-text'>City</span>
                    </div>
                    <div className='nav-item disabled'>
                        <span className='nav-item-text'>Pick Up</span>
                    </div>
                    <div className='nav-item disabled'>
                        <span className='nav-item-text'>Drop Off</span>
                    </div>
                    <div className='nav-item disabled'>
                        <span className='nav-item-text'>Vehicle</span>
                    </div>
                    <div className='nav-item disabled'>
                        <span className='nav-item-text'>Coverage</span>
                    </div>
                </div>
            </div>
            <div className="pricing-breakdown">
                <div className="pricing-breakdown-container">
                    <div>
                        <form>
                            <input 
                                type="text"
                                className="input"
                                placeholder="+ Add Promo Code"
                            />
                        </form>
                    </div>
                    <div>
                        Avg Daily Rate:
                        <span className="price">$0.00</span>
                    </div>
                    <div>
                        Estimated Total:
                        <span className="price">$0.00</span>
                    </div>
                    <span className="price-breakdown-link disabled">View Full Breakdown</span>
                    <button className="book-btn disabled">
                        <span className="book-btn-text">Book Now</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Footer;