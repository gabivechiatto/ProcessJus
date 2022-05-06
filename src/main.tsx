import React from 'react';
import ReactDOM from 'react-dom/client';
import Form from './components/Form';
import { Header } from './components/Header';

import GlobalStyle from './styles/global';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />    
    <Header />   
    <Form />
  </React.StrictMode>,
);
