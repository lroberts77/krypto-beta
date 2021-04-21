import React, { useEffect } from 'react';
import HistoryChart from "../components/HistoryChart";
import CoinData from "../components/CoinData";
import { useParams } from 'react-router-dom';
import api from "../api/geckoApi";

const CoinDetail = () => {

    
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        const fetchData = async () => {
        const res = await api.get(`/coins/${id.toLowerCase()}/market_chart/` , {
            params: {
                vs_currency: "usd",
                days: "1",
            },
        });
        console.log(res.data);
        };
        fetchData()
    }, [id]);

    const renderData = () => {
        return (
            <div className="coinlist">
                <HistoryChart />
                <CoinData />
            </div>
        );
    };

    return renderData();
};

export default CoinDetail;
