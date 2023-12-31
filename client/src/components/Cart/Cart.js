import React, { Fragment } from "react";
import "./Cart.css";
import CartItemCard from "./CartItemCard";
import { useSelector, useDispatch } from "react-redux";
import { addItemsToCart, removeItemsFromCart } from "../../actions/cartAction";
import { Typography } from "@mui/material";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);

  const increaseQuantity = (id, quantity, stock) => {
    const newQty = quantity + 1;
    if (stock <= quantity) {
      return;
    }
    dispatch(addItemsToCart(id, newQty));
  };

  const decreaseQuantity = (id, quantity) => {
    const newQty = quantity - 1;
    if (1 >= quantity) {
      return;
    }
    dispatch(addItemsToCart(id, newQty));
  };

  const deleteCartItems = (id) => {
    dispatch(removeItemsFromCart(id));
  };

  const checkoutHandler = () => {
    navigate("/login?redirect=shipping");
  };

  return (
    <Fragment>
      {cartItems.length === 0 ? (
        <div className="emptyCart">
          <RemoveShoppingCartIcon />

          <Typography>No Product in Your Cart</Typography>
          <Link to="/products">View Products</Link>
        </div>
      ) : (
        <Fragment>
          <div className="cart-outer-page">
            <div className="cartPage">
              <div className="cart-left-page">
                <h1>Shopping Cart</h1>
                <div className="cart-items-container">
                  {cartItems &&
                    cartItems.map((item) => (
                      <div className="cartContainer" key={item.product}>
                        <CartItemCard item={item} deleteCartItems={deleteCartItems} />
                        <div className="cart-item-actions">
                          <span className="cart-item-quantity">
                            <p>Qty -</p>
                            <div className="cartInput">
                              <button
                                onClick={() =>
                                  decreaseQuantity(item.product, item.quantity)
                                }
                              >
                                -
                              </button>
                              <input type="number" value={item.quantity} readOnly />
                              <button
                                onClick={() =>
                                  increaseQuantity(
                                    item.product,
                                    item.quantity,
                                    item.stock
                                  )
                                }
                              >
                                +
                              </button>
                            </div>
                          </span>
                        </div>
                        {/* <p className="cartSubtotal">{`₹${item.price * item.quantity
                          }`}</p> */}
                      </div>
                    ))}
                </div>
              </div>
              <div className="cart-right-page">
                <div className="cartGrossProfit">
                  <div></div>
                  <div className="cartGrossProfitBox">
                    <p>Gross Total</p>
                    <p>{`₹${cartItems.reduce(
                      (acc, item) => acc + item.quantity * item.price,
                      0
                    )}`}</p>
                  </div>
                  <div></div>
                  <div className="checkOutBtn">
                    <button onClick={checkoutHandler}>Check Out</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Cart;
