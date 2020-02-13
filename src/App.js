import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Banner from './components/Banner';
import ProductSlide from './components/ProductSlide';
import ProductCard from './components/ProductCard';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Banner />
      {/* <ProductSection> */}
        <ProductCard/>
      {/* </ProductSection> */}
    </div>
  );
}


export default App;
