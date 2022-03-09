import styled from '@emotion/styled';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppRouter from './components/AppRouter';

import './styles/App.css';

const MainContainer = styled('main')({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  backgroundColor: 'rgba(209, 203, 203, 0.569)',
  fontFamily: 'Nunito Sans',
});

const App: React.FC = () => (
  <MainContainer>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </MainContainer>
);

export default App;
