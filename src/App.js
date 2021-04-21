import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import CoinSummary from './pages/CoinSummary';
import CoinDetail from './pages/CoinDetail';
// import { Container } from '@material-ui/core';
// import useStyles from './Appstyles';
// import api from "../src/api/geckoApi";

export default function App() {

  // const classes = useStyles();
  // const [coins, setCoins] = useState([])
  // const [search, setSearch] = useState('')

  // on page load, fetch data from api and set response to coins, limited to 32
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await api.get("/coins/markets/", {
  //       params: {
  //         vs_currency: "usd",
  //       },
  //   })
  //   .catch(error => console.log(error));
  //   setCoins(res.data.slice(0, 32));
  //   }
  //   fetchData()
  //   }, []);

    // fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    // .then(res => {
    //   res.json()
    //   .then(data => setCoins(data.slice(0, 32)))

    // console.log(coins);

    // set the value of the search box to setsearch in turn search
    // const handleChange = (e) => {
    //   setSearch(e.target.value)
    // }

    // // function to filter coins that include search value
    // const filteredCoins = coins.filter(coin =>
    //   coin.name.toLowerCase().includes(search.toLowerCase())
    // );

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
