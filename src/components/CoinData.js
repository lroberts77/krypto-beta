import React from "react";

const CoinData = ({ data }) => {
  const renderData = () => {
    if (data) {
      return (
        <div>
        <span>Market Cap{data.market_cap}</span>
        <span>Total Supply{data.total_supply}</span>
        <span>Total Volume{data.total_volume}</span>
        <span>24hr High{data.high_24h}</span>
        <span>24hr Low{data.low_24h}</span>
        <span>Circulating Supply{data.circulating_supply}</span>
        </div>
      );
    }
  };

  return <div>{renderData()}</div>;
};

export default CoinData;
