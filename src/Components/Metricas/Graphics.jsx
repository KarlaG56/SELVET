import { React } from 'react';
import Card from './Card';
import { PieChart, ResponsiveContainer, Pie, Tooltip, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';

const graphicsLineal = [
    {
        name: "2023-07-20 03:07",
        stu: 12,
        op:1,
        fees: 13,
    },
    {
        name: "2023-07-20 06:57",
        stu: 9,
        op:2,
        fees: 13,
    },

    {
        name: "2023-07-20 07:23",
        stu: 5,
        op:2,
        fees: 13,
    },

    {
        name: "2023-07-20 03:57",
        stu: 7,
        op:9,
        fees: 13,
    },

    {
        name: "2023-07-20 08:34",
        stu: 1,
        op:8,
        fees: 13,
    }
    
    ]

const data = [
    { name: 'Name', value: 2400 },
    { name: 'NameB', value: 4567 },
];

const COLORS = ['#009DFF', "#FF0F23"];

function Graphics() {
    return (
        <div className="div-graphics-container">

            <div className="div-container-data-graf">

                <div className='opt-content'>
                    <div className="div-select-sensor">
                        <a className='sensor-txt'>Sensor:</a>
                        <select name="" id="" className="select-graphics-sensor">
                            <option value="">Selecciona</option>
                            <option value="">Gas LP</option>
                            <option value="">Monoxido de carbono</option>
                            <option value="">Hidrogeno</option>
                            <option value="">Temperatura y humedad</option>
                        </select>
                    </div>

                    <div className="div-btn-update">
                        <button className='btn-update'>Refrescar</button>
                        <img src="/Icon/reset.svg" alt="" className="img-reset" />
                    </div>
                </div>

                <div className="graphics-container">

                    <div className="static-data">
                        <div className="card-cont-static">
                            <div className="calculo-static-data">

                                <div className="div-img-calculo">
                                    <img src="/Icon/calculo.svg" alt="" className="img-calculo" />
                                </div>

                                <div className='static'>
                                    <Card
                                    moda="99,67"
                                    media="90"
                                    mediana="3"
                                    desvMed="1"
                                    desvStand="69"
                                    varianza="89"
                                    />
                                </div>

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

                    <div className="graphics-line ">
                        <div className="line">
                            <ResponsiveContainer width="100%" height="100%" aspect={2}>
                                <LineChart
                                    data={graphicsLineal}
                                    width={500}
                                    height={300}
                                    margin={{ bottom: 15, top: 2, right: 15, left: 10 }}
                                >
                                    <CartesianGrid />
                                    <XAxis dataKey={'name'} interval={`preserveStartEnd`} />
                                    <YAxis dataKey={'fees'} />
                                    <Line type="monotone" dataKey={'stu'} stroke='blue' strokeWidth={2}    />
                                    <Line type="monotone" dataKey={'op'} stroke='red' strokeWidth={2}  />

                                </LineChart>
                            </ResponsiveContainer>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Graphics;