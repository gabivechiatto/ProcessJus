import React from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer } from 'react-toastify';
import Form from './components/Form';
import { Header } from './components/Header';

import GlobalStyle from './styles/global';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Header />
    <Form />
    <ToastContainer data-test-cy="toast-message" />
  </React.StrictMode>,
  document.getElementById('root'),
);
