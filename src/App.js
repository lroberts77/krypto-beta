import React, { useState, useEffect } from 'react';
import './App.css';
import Coin from './Coin';
// import axios from 'axios';

function App() {

  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res => {
      res.json()
      .then(data => setCoins(data.slice(0, 20)))
    })
    .catch(error => console.log(error));
    }, []);

    console.log(coins);

    const handleChange = (e) => {
      setSearch(e.target.value)
    }

    const filteredCoins = coins.filter(coin =>
      coin.name.toLowerCase().includes(search.toLowerCase())
    );

  return (

    <div className="coin-app">
      <div className="circles">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
      </div>
      <div className="coin-search">
        <h1 className="coin-text">Search a currency</h1>
        <form>
          <input type="text" placeholder="Search..." onChange={handleChange} className="coin-input"/>
        </form>
      </div>
        {filteredCoins.map(coin => {
          return (
            <Coin 
              key={coin.id} 
              name={coin.name} 
              image={coin.image}
              symbol={coin.symbol} 
              price={coin.current_price}
              volume={coin.market_cap}
              priceChange={coin.price_change_percentage_24h}
              marketcap={coin.total_volume}
            />
          );
        })}
    </div>
  );
}

export default App;
