import React from "react";
import "./CartItemCard.css";
import { Link } from "react-router-dom";

const CartItemCard = ({ item, deleteCartItems }) => {
  console.log(item, deleteCartItems)

  return (
    // <div className="CartItemCard">
    //   <img src={item.image} alt="ssa" />
    //   <div>
    //     <Link to={`/product/${item.product}`}>{item.name}</Link>
    //     <span>{`Price: ₹${item.price}`}</span>
    //     <p onClick={() => deleteCartItems(item.product)}>Remove</p>
    //   </div>
    // </div>
    <div className="CartItemCard">
      <span className="cart-item-image">
        <img src={item.image} alt="cart-item-image" />
      </span>
      <div className="cart-item-data">
        <span className="cart-item-name-price">
          <Link to={`/product/${item.product}`}>
            {item.name}
          </Link>
          <span>
            ₹{item.price}
          </span>
        </span>
        <span className="remove-cart-items">
          <p onClick={() => deleteCartItems(item.product)}>Delete</p>
        </span>
      </div>
    </div>
  );
};

export default CartItemCard;
