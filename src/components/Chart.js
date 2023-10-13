
import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Chart() {

    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },

        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },

    ];
    return (
        <div>
            <ResponsiveContainer width="100%" height={350}>
                <BarChart
                    data={data}
        barCategoryGap={60}
        barGap={20}
                >
                    <Tooltip />
                    <Bar dataKey="pv" fill="#98D89E" />

                    <Bar dataKey="uv" fill="#EE8484" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart


