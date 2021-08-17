import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ModalProvider } from './providers/modal';

ReactDOM.render(
  <React.StrictMode>
    <ModalProvider>
      <App />
    </ModalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
