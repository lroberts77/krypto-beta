import React, { useRef, useEffect } from 'react';
import Chartjs from 'chart.js/auto';
import { ChartOptions } from '../ChartConfig/ChartConfig';

const HistoryChart = ({ data }) => {

    const chartRef = useRef()
    const { day, week, year, detail } = data;
    console.log(week);
    useEffect(() => {
        if(chartRef && chartRef.current) {
            const chartInstance = new Chartjs(chartRef.current, {
                type: 'line',
                data: {
                    labels: week,
                    datasets: [{
                        data: week,
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
    return (
        <div className="chart-container">
            <div>
                <canvas ref={chartRef} id="canvas" width={250} height={250}></canvas>
            </div>
        </div>
    )
}

export default HistoryChart
