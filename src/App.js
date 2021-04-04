import React, { useState, useEffect } from 'react';
import './App.css';
// import axios from 'axios';

function App() {

  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')

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
      .then(data => console.log(data))
      .then(data => setCoins(data));
    })
    .catch(error => console.log(error));
    }, []);

    const handleChange = (e) => {
      setSearch(e.target.value)
    }
  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Search a currency</h1>
        <form>
          <input type="text" placeholder="Search..." className="coin-input"/>
        </form>
      </div>

    </div>
  );
}

export default App;
