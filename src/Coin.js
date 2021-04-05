import React from 'react';
import './Coin.css';

const Coin = ({image, name, symbol, price, volume, priceChange, marketcap }) => {
    return (
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
                <p className="coin-volume">${volume.toLocaleString()}</p>
                <p className='coin-marketcap'>
                    Mkt Cap: ${marketcap.toLocaleString()}
                </p>
            </div>
        </div>
    )
}

export default Coin
