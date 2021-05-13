import React, { useRef, useEffect } from 'react';
import Chartjs from 'chart.js/auto';
import { ChartOptions } from '../ChartConfig/ChartConfig';
import './HistoryChart.css'

const HistoryChart = ({ data }) => {

    const chartRef = useRef()
    const { day, daytime, week, year, detail } = data;

    useEffect(() => {
        if(chartRef && chartRef.current) {
            const chartInstance = new Chartjs(chartRef.current, {
                type: 'line',
                data: {
                    labels: daytime,
                    datasets: [{
                        data: day,
                        backgroundColor: "rgba(174, 305, 194, 0.5",
                        borderColor: "rgba(174, 305, 194, 0.3)",
                        pointRadius: 0,
                    }]
                },
                options: {
                    ...ChartOptions,
                }
            });
        }
    })

    console.log(daytime);
    console.log(day);

    return (
        <div className="chart-container">
            <div>
                <canvas ref={chartRef} id="canvas" width={250} height={450}></canvas>
            </div>
        </div>
    )
}

export default HistoryChart
