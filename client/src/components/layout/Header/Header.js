import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Header.css'

const Header = () => {
    const [keyword, setKeyword] = useState('');
    const navigate = useNavigate();

    const submitSearch = (e) => {
        e.preventDefault();
        if (keyword.trim()) {
            navigate(`/products/${keyword}`);
        } else {
            navigate('/products');
        }
    }

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
                <input type='text' placeholder='Search a Product ...' onChange={(e) => setKeyword(e.target.value)} />
                <div className='header-search-image' onClick={submitSearch}>
                    <img src='https://i.ibb.co/VTPCcYT/ic-actions-search.png' alt='search' />
                </div>
            </div>
            <Link to='/login'>
                <div className='header-account'>
                    <div className='account-image'>
                        <img src='https://i.ibb.co/bW5PTf3/ic-actions-user.png' alt='account' />
                    </div>
                    <span>Account</span>
                </div>
            </Link>
            <Link to='/cart'>
                <div className='header-cart'>
                    <div className='cart-image'>
                        <img src='https://i.ibb.co/FBqHDYh/ic-ecommerce-cart.png' alt='cart' />
                    </div>
                    <span>Cart</span>
                </div>
            </Link>
        </div>
    )
}

export default Header