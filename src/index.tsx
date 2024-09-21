import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CurrencyConverterApp from './CurrencyConverterApp';
import "@cloudscape-design/global-styles/index.css";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <CurrencyConverterApp />
  </React.StrictMode>
);
