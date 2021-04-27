import React, { useRef, useEffect } from 'react';
import Chartjs from 'chart.js/auto';
import { ChartOptions } from '../ChartConfig.js/ChartConfig';


const HistoryChart = () => {

    const chartRef = useRef()

    useEffect(() => {
        if(chartRef && chartRef.current) {
            const chartInstance = new Chartjs(chartRef.current, {
                type: 'line',
                data: {
                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                    datasets: [{
                        label: '# of Votes',
                        data: [{ x: 1, y: 15},
                        { x: 2, y: 12},
                        { x: 3, y: 25},
                        ],
                        borderWidth: 1
                    }]
                },
                options: ChartOptions 
            });
        }
    })
    return (
        <div className="bg-white border mt-2 rounded p-3">
            <div>
                <canvas ref={chartRef} id="canvas" width={250} height={250}></canvas>
            </div>
        </div>
    )
}

export default HistoryChart
