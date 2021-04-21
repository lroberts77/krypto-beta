import React, { useState, useEffect } from 'react';
import "./CoinSummary.css";
import Coin from "./CoinList";
import api from "../api/geckoApi";
import useStyles from '../Appstyles';
import { TextField, Container } from '@material-ui/core';

const CoinSummary = () => {

    const classes = useStyles();
    const [coins, setCoins] = useState([])
    const [search, setSearch] = useState('')
  
    // on page load, fetch data from api and set response to coins, limited to 32
    useEffect(() => {
      const fetchData = async () => {
        const res = await api.get("/coins/markets/", {
          params: {
            vs_currency: "usd",
          },
      })
      .catch(error => console.log(error));
      setCoins(res.data.slice(0, 32));
      }
      fetchData()
      }, []);
  
      // fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      // .then(res => {
      //   res.json()
      //   .then(data => setCoins(data.slice(0, 32)))
  
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
    <>
        <form >
            <TextField className={classes.text}
                name="Search..." 
                variant={'outlined'} 
                label="Search"
                size="small"
                onChange={handleChange}
            />
        </form>
        <Container className={classes.grid} xs={12} sm={6} lg={6} xl={6}>
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
    </>
  );
};

export default CoinSummary;