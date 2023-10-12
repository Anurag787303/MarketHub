import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/cg"
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { getProduct } from "../../actions/productAction.js"
import { useDispatch, useSelector } from "react-redux";
import Loader from "../layout/Loader/Loader.js"
import { useAlert } from "react-alert";


const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { products, loading, error, productsCount } = useSelector(state => state.products)

  useEffect(() => {
    if (error) {
      return alert.error(error)
    }

    dispatch(getProduct())
  }, [dispatch, error, alert])

  return (
    <Fragment>
      {loading ? <Loader /> :
        <Fragment>
          <MetaData title="ECOMMERCE" />

          <div className="banner">
            <p>Welcome to Ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div>

          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
            {products && products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </Fragment>
      }
    </Fragment>
  );
};

export default Home;
