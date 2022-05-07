import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form';
import { ToastContainer } from 'react-toastify'
import { Header } from './components/Header';

import GlobalStyle from './styles/global';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Header />
    <Form />
    <ToastContainer />
  </React.StrictMode>,
  document.getElementById('root')
);
