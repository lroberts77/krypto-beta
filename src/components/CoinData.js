import React from 'react';

const CoinData = ({ data }) => {
    const renderData = () => {
    console.log(data);
    return (
        <div>
              <span>Market Cap{data.market_cap}</span>
              <span>Total Supply{data.total_supply}</span>
        </div>
    )
}
return <div>{renderData()}</div>;
}

export default CoinData
