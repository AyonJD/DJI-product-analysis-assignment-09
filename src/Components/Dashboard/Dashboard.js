import React from 'react';
import { Area, AreaChart, Bar, CartesianGrid, ComposedChart, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import useCharts from '../../Hooks/useCharts';

const Dashboard = () => {
    const [chartData] = useCharts();
    return (
        <div className='py-20 grid grid-cols-1 md:grid-cols-2 gap-10'>
            {/* <div className="line-chart"> */}
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    width={500}
                    height={300}
                    data={chartData}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="investment" stroke="#FF0000" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="revenue" stroke="#00FF00" />
                    <Line type="monotone" dataKey="sell" stroke="#0000FF" />
                </LineChart>
                {/* </div> */}
            </ResponsiveContainer>
            <div className="pie-chart">
            {/* <ResponsiveContainer width="100%" height="100%"> */}
                <PieChart width={400} height={400}>
                    <Pie data={chartData} dataKey="revenue" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                    <Pie data={chartData} dataKey="investment" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label={true} />
                </PieChart>
                </div>
            {/* </ResponsiveContainer> */}
            {/* <div className="composed-chart"> */}
            <ResponsiveContainer width="100%" height="100%">
                <ComposedChart
                    width={500}
                    height={400}
                    data={chartData}
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20,
                    }}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="month" scale="band" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="investment" barSize={20} fill="#413ea0" />
                    <Line type="monotone" dataKey="revenue" stroke="#00FF00" />
                    <Legend />
                </ComposedChart>
                {/* </div> */}
            </ResponsiveContainer>
            <div className="area-chart">
            {/* <ResponsiveContainer width="100%" height="100%"> */}
                <AreaChart
                    width={500}
                    height={400}
                    data={chartData}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="#8884d8" />
                    <Area type="monotone" dataKey="revenue" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                    <Area type="monotone" dataKey="sell" stackId="1" stroke="#ffc658" fill="#ffc658" />
                </AreaChart>
                </div>
            {/* </ResponsiveContainer> */}
        </div>
    );
};

export default Dashboard;