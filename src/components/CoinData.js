import React from "react";
import "./CoinData.css"

const CoinData = ({ data }) => {
  const renderData = () => {
    if (data) {
      return (
        <div className="data-container">
            <div className="column1">
                <span>Market Cap{data.market_cap}</span>
                <span>Total Supply{data.total_supply}</span>
            </div>
            <div className="column2">
                <span>Total Volume{data.total_volume}</span>
                <span>24hr High{data.high_24h}</span>
            </div>
            <div className="column3">
                <span>24hr Low{data.low_24h}</span>
                <span>Circulating Supply{data.circulating_supply}</span>
            </div>
        </div>
      );
    }
  };

  return <div>{renderData()}</div>;
};

export default CoinData;
