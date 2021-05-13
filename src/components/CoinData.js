import React from "react";
import "./CoinData.css"

const CoinData = ({ data }) => {
  const renderData = () => {
    if (data) {
      return (
        <div className="data-container">
            <div className="column">
                <div className="row">
                    <div>Market Cap</div>
                    <div>{data.market_cap}</div>
                </div>
                <div className="row">
                    <div>Total Supply</div>
                    <div>{data.total_supply}</div>
                </div>
            </div>
            <div className="column">
                <div className="row">
                    <div>Total Volume</div>
                    <div>{data.total_volume}</div>
                </div>
                <div className="row"> 
                    <div>24hr High</div>
                    <div>{data.high_24h}</div>
                </div>
            </div>
            <div className="column">
                <div>24hr Low</div>
                <div>{data.low_24h}</div>
                <div>Circulating Supply</div>
                <div>{data.circulating_supply}</div>
            </div>
        </div>
      );
    }
  };

  return <div>{renderData()}</div>;
};

export default CoinData;
