import React from 'react';
import { Grid } from '@material-ui/core';
import './CoinList.css';

const Coin = ({image, name, symbol, price, volume, priceChange, marketcap }) => {
    return (
        <Grid display="flex" flex-wrap="wrap" item xs={12} sm={6} lg={3}>
        <div className="coin-cointainer">
            <div className="coin-row1">
                <div className="coin-column1">
                    <img src={image} alt="crypto"/>
                </div>
                <div className="coin-column2">
                    <h1 className="coin-name" >{name}</h1>
                    <p className="coin-price">${price.toLocaleString()}</p>
                </div>
                <div className="coin-column3">
                    <p className="coin-symbol">{symbol.toUpperCase()}</p>
                    {priceChange < 0 ? (
                            <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
                        ) : (
                            <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
                        )}
                </div>
            </div>
            <div className="coin-row2">
                <p className="coin-volume">Volume: ${volume.toLocaleString()}</p>
                <p className='coin-marketcap'>
                    Mkt Cap: ${marketcap.toLocaleString()}
                </p>
            </div>
        </div>
        </Grid>
    )
}

export default Coin
