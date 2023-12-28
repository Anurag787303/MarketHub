import React from 'react'
import { Link } from 'react-router-dom'

const CategoryCard = ({ url, heading, buttonText }) => {
    return (
        <div className='category-card-container'>
            <h1>{heading}</h1>
            <Link className='category-card-image-container'>
                <img src={url} />
            </Link>
            <Link className='category-link-button'>{buttonText}</Link>
        </div>
    )
}

export default CategoryCard