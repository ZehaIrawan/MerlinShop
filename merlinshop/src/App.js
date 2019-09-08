import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Links from './components/Links';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Slider from './components/Slider';
import TopSeller from './components/TopSeller';
import Why from './components/Why';

function App() {
  return (
    <div className="container">
      <Navbar></Navbar>
      <Links></Links>
      <Hero></Hero>
      <Slider></Slider>
      <TopSeller></TopSeller>
      <Why></Why>
      <Product></Product>
      <Footer></Footer>
    </div>
  );
}

export default App;
