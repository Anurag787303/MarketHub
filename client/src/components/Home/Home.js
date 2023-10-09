import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/cg"
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";


const product = {
  name: "Blue Shirt",
  images: [{
    url: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQD78H2H5KqAz48MybID3Sv5uMrKU1qDD-hd6HZe0x3PrfB67odzeCktlaHn6UqeU3IwsW2HvPtziwnyiRW4G5w_-32y-CddhIItPBMeaYrRsUStHj_Z6_9"
  }],
  price: "3000",
  _id: "abcdefg"
}

const Home = () => {
  return (
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
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
      </div>
    </Fragment>
  );
};

export default Home;
