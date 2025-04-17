import React from 'react'
import { Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Home from './../pages/Home/index';
import Serivces from '../pages/Service';
import Price from '../pages/Price';
import Barber from '../pages/Barber';
import Galery from './../pages/Galery/index';
import Contact from '../pages/Contact';
import BlogPage from './../pages/Blog/BlogPage';
import SinglePage from '../pages/Blog/SinglePage';

const RoutePage = () => {
  return (
      <>
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/services" element={<Serivces />} />
              <Route path="/price" element={<Price/>} />
              <Route path="/barber" element={<Barber />} />
              <Route path="/gallery" element={<Galery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog-page" element={<BlogPage />} />
              <Route path="/single-page" element={<SinglePage />} />
              
          </Routes>
      </>
  );
}

export default RoutePage
