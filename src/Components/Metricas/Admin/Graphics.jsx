import { React } from 'react';
import { PieChart, ResponsiveContainer, Pie, Tooltip, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';

const ArraM = [
    {
        name: "Js",
        stu: 7,
        fees: 0,
    },

    {
        name: "Py",
        stu: 9990,
        fees: 11500,
    },

    {
        name: "Py",
        stu: 20,
        fees: 13,
    },

    {
        name: "Py",
        stu: 80,
        fees: 13,
    },

    {
        name: "Py",
        stu: 80,
        fees: 19903,
    },

    {
        name: "Js",
        stu: 7,
        fees: 0,
    },

    {
        name: "Py",
        stu: 9990,
        fees: 11500,
    },

    {
        name: "Py",
        stu: 20,
        fees: 13,
    },

    {
        name: "Py",
        stu: 80,
        fees: 13,
    },

    {
        name: "Py",
        stu: 80,
        fees: 19903,
    },
    {
        name: "Js",
        stu: 7,
        fees: 0,
    },

    {
        name: "Py",
        stu: 9990,
        fees: 11500,
    },

    {
        name: "Py",
        stu: 20,
        fees: 13,
    },

    {
        name: "Py",
        stu: 80,
        fees: 13,
    },

    {
        name: "Py",
        stu: 888989990,
        fees: 1990999993,
    },


]


const data = [
    { name: 'Name', value: 2400 },
    { name: 'NameB', value: 4567 },
];

const COLORS = ['#b39ddb', "#5c6bc0"];

function Graphics() {
    return (
        <div className="div-graphics-container">
            <div className="div-select-sensor">
                <a href="">Sensor:</a>
                <select name="" id="" className="select-graphics-sensor">
                    <option value="">Seleccionar</option>
                    <option value="">Gas LP</option>
                </select>
            </div>
            <div className="graphics-container">
                <div className="graphics-line">
                    <div className="line">
                        <ResponsiveContainer width="100%" height='100%' aspect={1.5}>
                            <LineChart
                                data={ArraM}
                                width={500}
                                height={300}
                                margin={{ bottom: 15, top: 6, right: 30, left: 30 }}
                            >
                                <CartesianGrid />
                                <XAxis dataKey={'name'} interval={`preserveStartEnd`} />
                                <YAxis dataKey={'fees'} />
                                <Line dataKey={'stu'} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>

                </div>

                <div className="graphics-circle">
                    <ResponsiveContainer>
                        <PieChart >
                            <Pie
                                dataKey='value'
                                data={data}
                                outerRadius={100}

                                fill='#82ca9d'
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    )
}

export default Graphics;