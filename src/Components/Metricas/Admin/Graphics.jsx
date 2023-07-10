import { React } from 'react';
import { PieChart, ResponsiveContainer, Pie, Tooltip, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';

const ArraM = [
    {
        name: "Js",
        stu: 12,
        fees: 13,
    },

    {
        name: "Java",
        stu: 0,
        fees: 13,
    },

    {
        name: "PHP",
        stu: 2,
        fees: 13,
    },


]


const data = [
    { name: 'Name', value: 2400 },
    { name: 'NameB', value: 4567 },
];

const COLORS = ['#009DFF', "#FF0F23"];

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
                    <div className="circle">
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

                    <div className="inf-codeColorCircle">
                        <div className="code-color">
                            <canva className="circle-code-blue"></canva>
                            <a href="" className="circle-txt-code">Sin errores</a>
                        </div>


                        <div className="code-color">
                            <canva className="circle-code-red"></canva>
                            <a href="" className="circle-txt-code">Errores</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Graphics;