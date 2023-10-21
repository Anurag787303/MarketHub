import './App.css';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WebFont from 'webfontloader';
import { useEffect, useState } from 'react';
import Home from './components/Home/Home';
import "react-bootstrap/dist/react-bootstrap.min.js"
import ProductDetails from './components/Product/ProductDetails.js';
import Products from './components/Product/Products.js';
import LoginSignUp from './components/User/LoginSignUp.js';
import store from './store.js';
import { loadUser } from './actions/userAction.js';
import UserOptions from './components/layout/Header/UserOptions.js';
import { useSelector } from 'react-redux';
import Profile from './components/User/Profile.js';
import ProtectedRoute from './components/Route/ProtectedRoute';
import UpdateProfile from './components/User/UpdateProfile.js';
import UpdatePassword from './components/User/UpdatePassword.js';
import ForgotPassowrd from './components/User/ForgotPassword.js';
import ResetPassword from './components/User/ResetPassword.js';
import Cart from './components/Cart/Cart.js';
import Shipping from './components/Cart/Shipping';
import ConfirmOrder from './components/Cart/ConfirmOrder.js';
import Payment from './components/Cart/Payment.js';
import axios from 'axios';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import MyOrders from './components/Order/MyOrders.js';
import OrderDetails from './components/Order/OrderDetails';

function App() {
  const { isAuthenticated, user } = useSelector(state => state.user)

  const [stripeApiKey, setStripeApiKey] = useState(null);

  async function getStripeApiKey() {
    const { data } = await axios.get('/backend-api/stripeapikey');
    setStripeApiKey(data.stripeApiKey)
  }

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Roboto:300,400,500,700', 'sans-serif', 'Inter:300,400,500,700', 'sans-serif']
      }
    })

    store.dispatch(loadUser());

    getStripeApiKey();
  }, [])

  return (
    <Router>
      <Header />

      {isAuthenticated && <UserOptions user={user} />}
      <Routes>
        {stripeApiKey && (
          <Route exact path="/process/payment" element={
            <ProtectedRoute>
              <Elements stripe={loadStripe(stripeApiKey)}>
                <Payment />
              </Elements>
            </ProtectedRoute>
          }
          />
        )}

        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route exact path="/products" element={<Products />} />
        <Route path="/products/:keyword" element={<Products />} />
        <Route path="/login" element={<LoginSignUp />} />

        <Route exact path="/account" element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        } />

        <Route exact path="/me/update" element={
          <ProtectedRoute>
            <UpdateProfile />
          </ProtectedRoute>
        } />

        <Route exact path="/password/update" element={
          <ProtectedRoute>
            <UpdatePassword />
          </ProtectedRoute>
        }
        />

        <Route exact path="/password/forgot" element={<ForgotPassowrd />} />
        <Route exact path="/password/reset/:token" element={<ResetPassword />} />
        <Route exact path="/cart" element={<Cart />} />

        <Route exact path="/shipping" element={
          <ProtectedRoute>
            <Shipping />
          </ProtectedRoute>
        }
        />

        <Route exact path="/order/confirm" element={
          <ProtectedRoute>
            <ConfirmOrder />
          </ProtectedRoute>
        }
        />

        <Route exact path="/orders" element={
          <ProtectedRoute>
            <MyOrders />
          </ProtectedRoute>
        }
        />

        <Route exact path="/order/:id" element={
          <ProtectedRoute>
            <OrderDetails />
          </ProtectedRoute>
        }
        />


      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
