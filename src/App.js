import React from 'react';
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Product from './components/product/Product';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
function  App() {

  return (<div>
      <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="/product/:id" element={<Product/>}/>
        </Routes>
        </BrowserRouter>
        <Footer/>
    </div>
    );
}

export default App;
