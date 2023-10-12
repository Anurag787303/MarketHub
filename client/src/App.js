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

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Roboto:300,400,500,700', 'sans-serif', 'Inter:300,400,500,700', 'sans-serif']
      }
    })
  }, [])

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route exact path="/products" element={<Products />} />
        <Route path="/products/:keyword" element={<Products />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
