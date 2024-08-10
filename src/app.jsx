import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Routess from './config/Routes';

import './assets/eye.jpg';
// import 'swiper/swiper.min.css';

export function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<Routess />} />
        {/* You can add more routes as needed */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
