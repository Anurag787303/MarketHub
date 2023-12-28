import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/cg"
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { getProduct } from "../../actions/productAction.js"
import { useDispatch, useSelector } from "react-redux";
import Loader from "../layout/Loader/Loader.js"
import { useAlert } from "react-alert";
import SimpleImageSlider from "react-simple-image-slider";
import CategoryCard from './CategoryCard.js'
import FeaturedProducts from './FeaturedProducts.js'

const homePageImages = [
  { url: "https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg" },
  { url: "https://m.media-amazon.com/images/I/61CiqVTRBEL._SX3000_.jpg" },
  { url: "https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg" }
]

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(state => state.products)

  useEffect(() => {
    if (error) {
      return alert.error(error)
    }

    dispatch(getProduct())
  }, [dispatch, error, alert])

  return (
    <Fragment>
      {loading ? <Loader /> :
        <div className="homepage-outer">
          <MetaData title="ECOMMERCE" />

          {/* <div className="banner">
            <p>Welcome to Ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div> */}

          <div className="image-slider">
            <SimpleImageSlider
              width={"100%"}
              height={"75vmin"}
              images={homePageImages}
              showBullets={false}
              showNavs={true}
              style={{ position: "relative", zIndex: 10 }}
            />

            <div className="homepage-second-section">
              <div className="homepage-categories">
                <CategoryCard url={"https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e570738029a725e686_Furniture-min.png"} heading={"Furniture"} buttonText={"Shop Now"} />
                <CategoryCard url={"https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e52d6553668075697e_hand%20bag-min.png"} heading={"Hand Bag"} buttonText={"Shop Now"} />
                <CategoryCard url={"https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e460afc22b7ea53520_books-min.png"} heading={"Books"} buttonText={"Shop Now"} />
                <CategoryCard url={"https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e754ac2e32897cb53b_tech-min.png"} heading={"Tech"} buttonText={"Shop Now"} />
                <CategoryCard url={"https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e64b769118272f244f_sneakers-min.png"} heading={"Sneakers"} buttonText={"Shop Now"} />
                <CategoryCard url={"https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e71eb4ad6d07e7568f_travel-min.png"} heading={"Travel"} buttonText={"Shop Now"} />
                <CategoryCard url={"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_2x._SY232_CB667159060_.jpg"} heading={"Gaming Accessories"} buttonText={"Shop Now"} />
                <CategoryCard url={"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_2x_v1._SY608_CB573698005_.jpg"} heading={"Deals in PCs"} buttonText={"Shop Now"} />
              </div>

              {/* <h2 className="homeHeading">Featured Products</h2>

              <div className="container" id="container">
                {products && products.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </div> */}

              <FeaturedProducts products={products} />
            </div>
          </div>
        </div>
      }
    </Fragment>
  );
};

export default Home;
