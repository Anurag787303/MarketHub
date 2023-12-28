import React from 'react'
import ProductCard from './ProductCard'

const FeaturedProducts = ({ products }) => {
    return (
        <div className='featured-product-container'>
            <h1>Featured Products</h1>
            <div className='featured-products'>
                {products && products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default FeaturedProducts