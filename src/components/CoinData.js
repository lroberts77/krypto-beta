import React from "react";
import "./CoinData.css"

const CoinData = ({ data }) => {
  const renderData = () => {
    if (data) {
      return (
        <div className="data-container">
            <div className="column">
                <div className="row">
                    <div className="detail-title">Market Cap</div>
                    <div>{data.market_cap}</div>
                </div>
                <div className="row">
                    <div className="detail-title">Total Supply</div>
                    <div>{data.total_supply}</div>
                </div>
            </div>
            <div className="column">
                <div className="row">
                    <div className="detail-title">Total Volume</div>
                    <div>{data.total_volume}</div>
                </div>
                <div className="row"> 
                    <div className="detail-title">24hr High</div>
                    <div>{data.high_24h}</div>
                </div>
            </div>
            <div className="column">
                <div className="row"> 
                    <div className="detail-title">24hr Low</div>
                    <div>{data.low_24h}</div>
                </div>
                <div className="row"> 
                    <div className="detail-title">Circulating Supply</div>
                    <div>{data.circulating_supply}</div>
                </div>
            </div>
        </div>
      );
    }
  };

  return <div>{renderData()}</div>;
};

export default CoinData;
