import React, { useState, useEffect } from 'react';
import './App.css';
// import axios from 'axios';

function App() {

  const [coins, setCoins] = useState([])

  // useEffect(() => {
  //   axios.get(
  //     'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
  //     .then(res => {
  //     setCoins(res.data)
  //     console.log(res.data);
  //   })
  //   .catch(error => console.log(error));
  // }, []);
  
  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res => {
      res.json()
    .then(data => console.log(data));
    })
    .catch(error => console.log(error));
    }, []);

  return (
    <div className="coin-app">
      
    </div>
  );
}

export default App;
