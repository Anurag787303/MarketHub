import React, { Fragment, useState } from 'react'
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
        <Fragment>
            <div className='header'>
                <Link to='/'>
                    <div className='header-logo'>
                        <img src='https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e86ab4c21faa7bc0bd90dd_Logo.svg' alt='logo' />
                    </div>
                </Link>
                <div className='header-links'>
                    <Link to='/products'>Products</Link>
                    <Link to='/'>About</Link>
                    <Link to='/contact'>Contact</Link>
                </div>
                <div className='header-search'>
                    <select className='category-select'>
                        <option value="All">All</option>
                        <option value="Laptop">Laptop</option>
                        <option value="Footwear">Footwear</option>
                        <option value="Bottom">Bottom</option>
                        <option value="Tops">Tops</option>
                        <option value="Attire">Attire</option>
                        <option value="Camera">Camera</option>
                        <option value="SmartPhones">SmartPhones</option>
                    </select>
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
            <div className='header-line'>

            </div>
        </Fragment>
    )
}

export default Header