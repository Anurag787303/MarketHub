import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <Link to='/'>
            <div className='header-logo'>
                <img src='https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e86ab4c21faa7bc0bd90dd_Logo.svg' alt='logo' />
            </div>
            </Link>
            <div className='header-links'>
                <Link to='/'>Category</Link>
                <Link to='/products'>Products</Link>
                <Link to='/'>About</Link>
                <Link to='/'>Contact</Link>
            </div>
            <div className='header-search'>
                <input type='text' placeholder='Search' />
                <div className='header-search-image'>
                    <img src='./assets/ic-actions-search.png' alt='search' />
                </div>
            </div>
            <div className='header-account'>
                <div className='account-image'>
                    <img src='./assets/ic-actions-user.png' alt='account' />
                </div>
                <span>Account</span>
            </div>
            <div className='header-cart'>
                <div className='cart-image'>
                    <img src='./assets/ic-ecommerce-cart.png' alt='cart' />
                </div>
                <span>Cart</span>
            </div>
        </div>
    )
}

export default Header