import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Legend
} from 'chart.js';

ChartJS.register(  
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Legend
)

const BarChart = ({ custom, category_7, category_8, category_9, category_10 }) => {
  const [chartData, setChartData] = useState({
    datasets: []
  })

  const [chartOptions, setChartOptions] = useState({})

  useEffect(() => {
    setChartData({
      labels: ["Custom", "Category_7", "Category_8", "Category_9", "Category_10"],
      datasets: [
        {
          label: "Value",
          data: [custom, category_7, category_8, category_9, category_10],
          backgroundColor: "#F0C3F1"
        }
      ]
    });
    setChartOptions({
      plugins: {
        legend: {
          position: 'top'
        },
        title: {
          display: false,
        },
      },
      maintainAspectRatio: false,
      responsive: true
    })
  }, [custom, category_7, category_8, category_9, category_10])

  return (
    <>
      <div>
        <Bar data={chartData} options={chartOptions} />
      </div>
    </>
  )
}

export default BarChart;