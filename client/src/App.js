import './App.css';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WebFont from 'webfontloader';
import { useEffect } from 'react';
import Home from './components/Home/Home';
import "react-bootstrap/dist/react-bootstrap.min.js"

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
      <Footer />
    </Router>
  )
}

export default App;
