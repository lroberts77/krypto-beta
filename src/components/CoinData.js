import React from "react";
import "./CoinData.css"

const CoinData = ({ data }) => {
  const renderData = () => {
    if (data) {
      return (
        <div className="data-container">
            <div className="column">
                <div>Market Cap</div>
                <div>{data.market_cap}</div>
                <div>Total Supply</div>
                <div>{data.total_supply}</div>
            </div>
            <div className="column">
                <div>Total Volume</div>
                <div>{data.total_volume}</div>
                <div>24hr High</div>
                <div>{data.high_24h}</div>
            </div>
            <div className="column">
                <div>24hr Low{data.low_24h}</div>
                <div>Circulating Supply{data.circulating_supply}</div>
            </div>
        </div>
      );
    }
  };

  return <div>{renderData()}</div>;
};

export default CoinData;
