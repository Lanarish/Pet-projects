import React from 'react';
import { Route, Routes } from 'react-router-dom';

import SupportPage from 'src/pages/SuportPage';
import MainPage from 'src/pages/MainPage';
import NotFoundPage from 'src/pages/NotFoundPage';
import ProductPage from 'src/pages/SingleProductPage';
import AboutPage from 'src/pages/AboutPage';
import DeliveryPage from 'src/pages/DeliveryPage';
import Shop from 'src/pages/Shop';

import Footer from './Footer';
import Header from './Header';

import './../styles/App.css';

const AppRouter: React.FC = () => (
  <>
    <Header />
    <div className="content">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/products" element={<Shop />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/delivery" element={<DeliveryPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
    <Footer />
  </>
);
export default AppRouter;
