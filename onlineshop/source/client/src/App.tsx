import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Shop from './pages/Shop';

const App: React.FC = () => (
  <BrowserRouter>
    <Shop />
  </BrowserRouter>
);

export default App;
