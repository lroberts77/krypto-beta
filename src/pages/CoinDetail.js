import React, { useEffect, useState } from 'react';
import HistoryChart from "../components/HistoryChart";
import CoinData from "../components/CoinData";
import { useParams } from 'react-router-dom';
import api from "../api/geckoApi";

const CoinDetail = () => {

    const { id } = useParams();
    console.log(id);
    const [coinData, setCoinData] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const formatData = data => {
        return data.map(el => {
            return {
                t: el[0],
                y: el[1],
            };
        });
    };

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const [day, week, year, detail] = await Promise.all([
                api.get(`/coins/${id.toLowerCase()}/market_chart/` , {
                    params: {
                        vs_currency: "usd",
                        days: "1",
                    },
                }).catch(error => console.log(error)),
                api.get(`/coins/${id.toLowerCase()}/market_chart/` , {
                    params: {
                        vs_currency: "usd",
                        days: "7",
                    },
                }).catch(error => console.log(error)),
                api.get(`/coins/${id.toLowerCase()}/market_chart/` , {
                    params: {
                        vs_currency: "usd",
                        days: "365",
                    },
                }).catch(error => console.log(error)),
                api.get("/coins/markets/", {
                    params: {
                      vs_currency: "usd",
                      ids: id.toLowerCase(),
                    },
                }).catch(error => console.log(error)),
            ])
            console.log(detail.data);
            setCoinData({
                day: day.data.prices,
                week: week.data.prices,
                year: year.data.prices,
                detail: detail.data[0]
            })
            setIsLoading(false);
        };
            fetchData()
    }, [id]);

    const renderData = () => {
        if(isLoading) {
            return <div>Loading...</div>
        }
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
