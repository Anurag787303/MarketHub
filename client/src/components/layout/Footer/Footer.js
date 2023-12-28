import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    return (
        <Fragment>
            <div className='footer-line'></div>
            <div className='footer-wrapper'>
                <div className='footer'>
                    <div className='footer-1'>
                        <Link to='/'>
                            <div className='footer-1-logo'>
                                <img src='https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e86ab4c21faa7bc0bd90dd_Logo.svg' alt='logo' />
                            </div>
                        </Link>
                        <p className='footer-1-text'>
                            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        </p>
                        <div className='footer-1-payments'>
                            <h1>Accepted Payments</h1>
                            <div class="footer-payment-thumb-wrap">
                                <div class="payment-single-item">
                                    <img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb1ce8816711ebecac46d8_stripe.png" loading="lazy" alt="" />
                                </div>
                                <div class="payment-single-item">
                                    <img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb1ce82d440b7ab84a993f_visa.png" loading="lazy" alt="" />
                                </div>
                                <div class="payment-single-item">
                                    <img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb1ce8f032504012a5896b_Mastercard.png" loading="lazy" alt="" />
                                </div>
                                <div class="payment-single-item">
                                    <img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e48b497e6ce846b7ff_Amazon.png" loading="lazy" alt="" />
                                </div>
                                <div class="payment-single-item">
                                    <img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb1f054e419e42aca4a9a2_Klarna.png" loading="lazy" alt="" />
                                </div>
                                <div class="payment-single-item">
                                    <img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb1ce7c4510cf9a55828a0_PayPal.png" loading="lazy" alt="" />
                                </div>
                                <div class="payment-single-item">
                                    <img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e4707380264b25e680_ApplePay.png" loading="lazy" alt="" />
                                </div>
                                <div class="payment-single-item">
                                    <img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb1f55dc68c5ee83d0cbf8_GooglePay.png" loading="lazy" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='footer-2'>
                        <h1 className='footer-2-title'>
                            Department
                        </h1>
                        <div className='footer-2-links'>
                            <a href='#' className='footer-2-link'>Fashion</a>
                            <a href='#' className='footer-2-link'>Eudcation Product</a>
                            <a href='#' className='footer-2-link'>Frozen Food</a>
                            <a href='#' className='footer-2-link'>Beverages</a>
                            <a href='#' className='footer-2-link'>Organic Grocery</a>
                            <a href='#' className='footer-2-link'>Office Supplies</a>
                            <a href='#' className='footer-2-link'>Beauty Products</a>
                            <a href='#' className='footer-2-link'>Books</a>
                            <a href='#' className='footer-2-link'>Electronics & Gadget</a>
                            <a href='#' className='footer-2-link'>Travel Accessories</a>
                            <a href='#' className='footer-2-link'>Fitness</a>
                            <a href='#' className='footer-2-link'>Sneakers</a>
                            <a href='#' className='footer-2-link'>Toys</a>
                            <a href='#' className='footer-2-link'>Furniture</a>
                        </div>
                    </div>
                    <div className='footer-3'>
                        <h1 className='footer-3-title'>
                            About Us
                        </h1>
                        <div className='footer-3-links'>
                            <a href='#' className='footer-2-link'>About Shopcart</a>
                            <a href='#' className='footer-2-link'>Careers</a>
                            <a href='#' className='footer-2-link'>News & Blog</a>
                            <a href='#' className='footer-2-link'>Help</a>
                            <a href='#' className='footer-2-link'>Press Center</a>
                            <a href='#' className='footer-2-link'>Shop By Location</a>
                            <a href='#' className='footer-2-link'>Shopcart Brands</a>
                            <a href='#' className='footer-2-link'>Affiliate & Partners</a>
                            <a href='#' className='footer-2-link'>Ideas & Guides</a>
                        </div>
                    </div>
                    <div className='footer-4'>
                        <h1 className='footer-4-title'>
                            Services
                        </h1>
                        <div className='footer-4-links'>
                            <a href='#' className='footer-2-link'>Gift Card</a>
                            <a href='#' className='footer-2-link'>Mobile App</a>
                            <a href='#' className='footer-2-link'>Shipping & Delivery</a>
                            <a href='#' className='footer-2-link'>Order Pickup</a>
                            <a href='#' className='footer-2-link'>Account Signup</a>
                        </div>
                    </div>
                    <div className='footer-5'>
                        <h1 className='footer-5-title'>
                            Help
                        </h1>
                        <div className='footer-5-links'>
                            <a href='#' className='footer-2-link'>Shopcart Help</a>
                            <a href='#' className='footer-2-link'>Returns</a>
                            <a href='#' className='footer-2-link'>Track Orders</a>
                            <a href='#' className='footer-2-link'>Contact Us</a>
                            <a href='#' className='footer-2-link'>Feedback</a>
                            <a href='#' className='footer-2-link'>Security & Fraud</a>
                        </div>
                    </div>
                </div>
                <div className='footer-line'></div>
                <div className='footer-bottom'>
                    <div className='footer-bottom-1'>
                        <div>
                            <div className='footer-bottom-1-image'>
                                <img src='https://i.ibb.co/KFwZZJs/ic-ecommerce-basket.png' alt='basket' />
                            </div>
                            <h2>Become Seller</h2>
                        </div>
                        <div>
                            <div className='footer-bottom-1-image'>
                                <img src='https://i.ibb.co/gFyCyGs/ic-ecommerce-gift.png' alt='gift' />
                            </div>
                            <h2>Gift Cards</h2>
                        </div>
                        <div>
                            <div className='footer-bottom-1-image'>
                                <img src='https://i.ibb.co/Wv0yF5X/ic-devices-desktop.png' alt='desktop' />
                            </div>
                            <h2>Help Center</h2>
                        </div>
                    </div>
                    <div className='footer-bottom-2'>
                        <h2>Terms Of Service</h2>
                        <h2>Privacy & Policy</h2>
                    </div>
                    <div className='footer-bottom-3'>
                        <h2>© 2023 Shopcart. All rights reserved</h2>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Footer