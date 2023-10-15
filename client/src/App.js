import './App.css';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WebFont from 'webfontloader';
import { useEffect } from 'react';
import Home from './components/Home/Home';
import "react-bootstrap/dist/react-bootstrap.min.js"
import ProductDetails from './components/Product/ProductDetails.js';
import Products from './components/Product/Products.js';
import LoginSignUp from './components/User/LoginSignUp.js';
import store from './store.js';
import { loadUser } from './actions/userAction.js';
import UserOptions from './components/layout/Header/UserOptions.js';
import { useSelector } from 'react-redux'; 

function App() {
  const { isAuthenticated, user } = useSelector(state => state.user)

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Roboto:300,400,500,700', 'sans-serif', 'Inter:300,400,500,700', 'sans-serif']
      }
    })

    store.dispatch(loadUser());
  }, [])

  return (
    <Router>
      <Header />

      {isAuthenticated && <UserOptions user={user} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route exact path="/products" element={<Products />} />
        <Route path="/products/:keyword" element={<Products />} />
        <Route path="/login" element={<LoginSignUp/>} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
