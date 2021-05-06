import React from 'react';

const CoinData = ({ data }) => {
    const renderData = () => {
    console.log(data);
    return (
        <div>
              <span>Market Cap{data.market_cap}</span>
              <span>Total Supply{data.total_supply}</span>
              <span>Total Volume{data.total_volume}</span>
              <span>24hr High{data.high_24h}</span>
        </div>
    )
}
return <div>{renderData()}</div>;
}

export default CoinData
