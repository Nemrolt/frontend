import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const Analytics = () => {
    const [chartData, setChartData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token');
                const res = await axios.get('http://localhost:5000/api/analytics', {
                    headers: { 'Authorization': `Bearer ${token}` },
                });

                const data = res.data; // Expected format: { labels: [], values: [] }

                setChartData({
                    labels: data.labels,
                    datasets: [
                        {
                            label: 'Student Progress',
                            data: data.values,
                            backgroundColor: 'rgba(75, 192, 192, 0.6)',
                        },
                    ],
                });
            } catch (err) {
                console.error(err);
                alert('Failed to fetch analytics data.');
            }
        };

        fetchData();
    }, []);

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Student Progress Overview',
            },
        },
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-semibold mb-4">Analytics</h2>
            <Bar data={chartData} options={options} />
        </div>
    );
};

export default Analytics;
