import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import CoinSummary from './pages/CoinSummary';
import CoinDetail from './pages/CoinDetail';

export default function App() {

  return (
    <div className="coin-app">
      <BrowserRouter>
      <div className="coin-search">
        <h1 className="coin-text">Krypto-Beta</h1>
      </div>
      <Route exact path="/" component={CoinSummary} />
      <Route path="/coins/:id" component={CoinDetail} />
      </BrowserRouter>
    </div>
  );
}
