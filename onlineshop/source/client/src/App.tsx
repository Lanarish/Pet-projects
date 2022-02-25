import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Shop from './pages/Shop';

const App: React.FC = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/shop" element={<Shop />} />
    </Routes>
  </BrowserRouter>
);

export default App;
