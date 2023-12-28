import React from "react";
import { Link } from "react-router-dom";
import Rating from '@mui/material/Rating';

const ProductCard = ({ product }) => {
  const options = {
    value: product.ratings,
    readOnly: true,
    value: product.ratings,
    precision: 0.5,
  };
  return (
    <Link className="productCard" to={`/product/${product._id}`}>
      <span className="product-card-image">
        <img src={product.images[0].url} alt={product.name} />
      </span>
      <p>{product.name}</p>
      <div>
        <Rating {...options} />{" "}
        <span className="productCardSpan">
          {" "}
          ({product.numOfReviews} Reviews)
        </span>
      </div>
      <div className="price-button">
        <span>{`₹${product.price}`}</span>
        <button>Buy Now</button>
      </div>
    </Link>
  );
};

export default ProductCard;
