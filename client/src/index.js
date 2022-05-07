import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
  <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
    <App />
  
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

