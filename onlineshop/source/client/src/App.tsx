import styled from '@emotion/styled';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import Shop from './pages/Shop';

const MainContainer = styled('main')({
  backgroundColor: 'rgba(209, 203, 203, 0.569)',
  fontFamily: 'Nunito Sans',
});

const App: React.FC = () => (
  <MainContainer>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </MainContainer>
);

export default App;
