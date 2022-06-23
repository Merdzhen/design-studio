import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/normalize.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { PortfolioContextProvider } from './components/context/portfolioContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <PortfolioContextProvider>
      <App />
    </PortfolioContextProvider>
  </BrowserRouter>
);


