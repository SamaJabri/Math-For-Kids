import React from 'react';
import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';

const Statistics = () =>
{
	 

    const data = [
        {
            day: 'Sep, 24',
            dailyScore: 20,
        },
        {
            day: 'Sep, 23',
            dailyScore: 40,
        },
        {
            day: 'Sep, 22',
            dailyScore: 20,
        },
        {
            day: 'Sep, 21',
            dailyScore: 100,
        },
        {
            day: 'Sep, 20',
            dailyScore: 40,
        },
        {
            day: 'Sep, 19',
            dailyScore: 80,
        },
        {
            day: 'Sep, 18',
            dailyScore: 0,
        },
    ];

    return (
        <div className="statistics-page">
            <h1>Statistics</h1>
            <ResponsiveContainer width="90%" height="90%">
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid stroke="white" />
                    <XAxis stroke="white" dataKey="day" />
                    <YAxis stroke="white" dataKey="dailyScore" />
                    <Tooltip wrapperStyle={{
                        width: '12rem',
                        fontSize: '1.5rem',
                        outline: 'none'
                    }} contentStyle={{
                        height: '7rem',
                        padding: '1rem'
                    }}
                    />
                    <Legend />
                    <Line type="monotone" dataKey="dailyScore" stroke="var(--yellow)" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Statistics;
