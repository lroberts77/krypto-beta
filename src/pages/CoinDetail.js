import React from 'react'
import { useParams } from 'react-router';

const CoinDetail = () => {

    const { id } = useParams();
    console.log(id);

    return (
        <div>
            Hello
        </div>
    )
}

export default CoinDetail;
