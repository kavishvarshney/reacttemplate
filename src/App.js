import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Feature from './components/Feature';
import Cards from './components/Cards';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Feature />
      <Hero />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
