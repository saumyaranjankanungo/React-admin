import React from 'react';
import "./chart.css";
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Jan',
        "Active User": 2000,
    },
    {
        name: 'Feb',
        "Active User": 3100,
    },
    {
        name: 'Mar',
        "Active User": 5200,
    },
    {
        name: 'Apr',
        "Active User": 4000,
    },
    {
        name: 'May',
        "Active User": 3400,
    },
    {
        name: 'Jun',
        "Active User": 2000,
    },
    {
        name: 'Jul',
        "Active User": 4000,
    },
    {
        name: 'Aug',
        "Active User": 3300,
    },
    {
        name: 'Sep',
        "Active User": 4300,
    },
    {
        name: 'Oct',
        "Active User": 4800,
    },
    {
        name: 'Nov',
        "Active User": 6000,
    },
    {
        name: 'Dec',
        "Active User": 5500,
    },
];

const Chart = ({title, data, dataKey, grid}) => {
    return (
        <div className="chart">
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width="100%" aspect={4/1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#5550bd" />
                    <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
                    <Tooltip />
                    {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart;