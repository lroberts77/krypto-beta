import React, { useEffect, useState } from 'react';
import HistoryChart from "../components/HistoryChart";
import CoinData from "../components/CoinData";
import { useParams } from 'react-router-dom';
import api from "../api/geckoApi";

const CoinDetail = () => {

    
    const { id } = useParams();
    console.log(id);
    const [coinData, setCoinData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
        const resultsDay = await api.get(`/coins/${id.toLowerCase()}/market_chart/` , {
            params: {
                vs_currency: "usd",
                days: "1",
            },
        });
        const resultsWeek = await api.get(`/coins/${id.toLowerCase()}/market_chart/` , {
            params: {
                vs_currency: "usd",
                days: "7",
            },
        });
        console.log(resultsDay.data);
        setCoinData({
            day: resultsDay.data.prices,
            week: resultsWeek.data.prices
        })
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
