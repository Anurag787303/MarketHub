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
import Dashboard from './components/admin/Dashboard'
import ProductList from './components/admin/ProductList'
import UpdateProduct from './components/admin/UpdateProduct'
import NewProduct from './components/admin/NewProduct'
import OrderList from './components/admin/OrderList.js';
import ProcessOrder from './components/admin/ProcessOrder.js';
import UsersList from './components/admin/UsersList.js';
import UpdateUser from './components/admin/UpdateUser.js';
import ProductReviews from './components/admin/ProductReviews.js';

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

        <Route exact path="/admin/dashboard" element={
          <ProtectedRoute isAdmin={true}>
            <Dashboard />
          </ProtectedRoute>
        }
        />

        <Route exact path="/admin/products" element={
          <ProtectedRoute isAdmin={true}>
            <ProductList />
          </ProtectedRoute>
        }
        />

        <Route exact path="/admin/product/:id" element={
          <ProtectedRoute isAdmin={true}>
            <UpdateProduct />
          </ProtectedRoute>
        }
        />

        <Route exact path="/admin/product" element={
          <ProtectedRoute isAdmin={true}>
            <NewProduct />
          </ProtectedRoute>
        }
        />

        <Route exact path="/admin/orders" element={
          <ProtectedRoute isAdmin={true}>
            <OrderList />
          </ProtectedRoute>
        }
        />

        <Route exact path="/admin/order/:id" element={
          <ProtectedRoute isAdmin={true}>
            <ProcessOrder />
          </ProtectedRoute>
        }
        />

        <Route exact path="/admin/users" element={
          <ProtectedRoute isAdmin={true}>
            <UsersList />
          </ProtectedRoute>
        }
        />

        <Route exact path="/admin/user/:id" element={
          <ProtectedRoute isAdmin={true}>
            <UpdateUser />
          </ProtectedRoute>
        }
        />

        <Route exact path="/admin/reviews" element={
          <ProtectedRoute isAdmin={true}>
            <ProductReviews />
          </ProtectedRoute>
        }
        />

      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
