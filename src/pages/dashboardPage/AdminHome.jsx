import React from 'react';
import useAuth from '../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { FaDollarSign, FaUsers } from 'react-icons/fa';
import { FaIdCardClip } from 'react-icons/fa6';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Legend, Tooltip } from 'recharts';
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';
const AdminHome = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure()
    const { data } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data
        }
    })

    const { data: chartData = [] } = useQuery({
        queryKey: ['order-state'],
        queryFn: async () => {
            const res = await axiosSecure.get('/order-state');
            return res.data

        }
    });
    const pieChartData = chartData.map(data => {
        return { name: data.category, value: data.revenue }
    })
    console.log(chartData);



    const colors = ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', 'red', 'pink'];



    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };
    return (
        <div>
            <h2 className="tex-3xl">
                <span>Hi, Welcome </span>
                {user.displayName ? user.displayName : "Back"}
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                <div className="flex gap-4 justify-center items-center rounded-lg bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF]  text-white px-8 py-4">
                    <figure><FaIdCardClip className='text-5xl' /></figure>
                    <div className="flex flex-col items-center text-center">
                        <h2 className="card-title text-3xl font-extrabold">{data?.totalRevenue}</h2>
                        <h3 className='text-2xl'>Revenue</h3>

                    </div>
                </div>
                <div className="flex gap-4 justify-center items-center rounded-lg bg-gradient-to-r from-[#D3A256] to-[#FDE8C0]  text-white px-8 py-4">
                    <figure><FaUsers className='text-5xl' /></figure>
                    <div className="flex flex-col items-center text-center">
                        <h2 className="card-title text-3xl font-extrabold">{data?.totalUsers}</h2>
                        <h3 className='text-2xl'>Customers</h3>

                    </div>
                </div>
                <div className="flex gap-4 justify-center items-center rounded-lg bg-gradient-to-r from-[#FE4880] to-[#FECDE9]  text-white px-8 py-4">
                    <figure><FaIdCardClip className='text-5xl' /></figure>
                    <div className="flex flex-col items-center text-center">
                        <h2 className="card-title text-3xl font-extrabold">{data?.menuItems}</h2>
                        <h3 className='text-2xl'>Products</h3>

                    </div>
                </div>
                <div className="flex gap-4 justify-center items-center rounded-lg bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF]  text-white px-8 py-4">
                    <figure><FaIdCardClip className='text-5xl' /></figure>
                    <div className="flex flex-col items-center text-center">
                        <h2 className="card-title text-3xl font-extrabold">{data?.totalOrders}</h2>
                        <h3 className='text-2xl'>Orders</h3>

                    </div>
                </div>
            </div>
            <div className='flex'>
                <div className='w-1/2'>

                    <BarChart
                        width={600}
                        height={400}
                        data={chartData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Tooltip></Tooltip>
                        <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 6]} />
                            ))}
                        </Bar>

                    </BarChart>
                </div>
                <div className='w-1/2'>
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart width={600} height={600}>
                            <Legend></Legend>
                            <Pie
                                data={pieChartData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {pieChartData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                                ))}
                            </Pie>
                            <Tooltip></Tooltip>

                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;