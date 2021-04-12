import React, { useState, useEffect } from 'react';
import './App.css';
import Coin from './Coin';
import { TextField, Container } from '@material-ui/core';
import useStyles from './Appstyles';

export default function App() {

  const classes = useStyles();
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')

  // on page load fetch data from api and set response to coins, limited to 20
  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res => {
      res.json()
      .then(data => setCoins(data.slice(0, 32)))
    })
    .catch(error => console.log(error));
    }, []);

    console.log(coins);

    // set the value of the search box to setsearch in turn search
    const handleChange = (e) => {
      setSearch(e.target.value)
    }

    // function to filter coins that include search value
    const filteredCoins = coins.filter(coin =>
      coin.name.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Search a currency</h1>
        <form >
        <TextField className={classes.text}
        name="Search..." 
                variant={'outlined'} 
                label="Search"
                size="small"
                onChange={handleChange}
                />
        </form>
      </div>
      <Container className={classes.grid} item xs={12} sm={6} lg={6} xl={6}>
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
      </Container>  
    </div>
  );
}
