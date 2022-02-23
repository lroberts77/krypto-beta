import React, { useEffect, useState } from 'react';
import HistoryChart from "../components/HistoryChart";
import CoinData from "../components/CoinData";
import { useParams } from 'react-router-dom';
import api from "../api/geckoApi";

const CoinDetail = () => {

    const { id } = useParams();
    // console.log(id);
    const [coinData, setCoinData] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const formatData = data => {
        return data?.map(el => {
            return {
                x: el[0],
                y: el[1].toFixed(2),
            };
        });
    };

    // const formattime = data => {
    //     return data.map(el => {
    //         return {
    //             x: el[0],
    //         };
    //     });
    // };

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const [day, detail] = await Promise.all([
                api.get(`/coins/${id.toLowerCase()}/market_chart/` , {
                    params: {
                        vs_currency: "usd",
                        days: "1",
                    },
                }).catch(error => console.log(error)),
                // api.get(`/coins/${id.toLowerCase()}/market_chart/` , {
                //     params: {
                //         vs_currency: "usd",
                //         days: "7",
                //     },
                // }).catch(error => console.log(error)),
                // api.get(`/coins/${id.toLowerCase()}/market_chart/` , {
                //     params: {
                //         vs_currency: "usd",
                //         days: "365",
                //     },
                // }).catch(error => console.log(error)),
                api.get("/coins/markets/", {
                    params: {
                      vs_currency: "usd",
                      ids: id.toLowerCase(),
                    },
                }).catch(error => console.log(error)),
            ])
            console.log(day);
            setCoinData({
                day: formatData(day?.data?.prices),
                // daytime: formattime(day.data.prices),
                // week: formatData(week.data.prices),
                // year: formatData(year.data.prices),
                detail: detail?.data[0]
            })
            setIsLoading(false);
        };
            fetchData()
    }, [id]);

    const renderData = () => {
        if(isLoading) {
            return <div>Loading...</div>
        }
        if (coinData) {
        return (
            <div className="coinlist">
                <HistoryChart data={coinData}/>
                <CoinData data={coinData.detail}/>
            </div>
        );
        }
    };

    return renderData();
};

export default CoinDetail;
