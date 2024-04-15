import React, { useState, useEffect } from 'react';
import Card from './Card';

const data = [
    { dato1: 'Valor1', dato2: 'Valor2', dato3: 'Valor3', dato4: 'Valor4', dato5: 'Valor5' },
    { dato1: 'Valor6', dato2: 'Valor7', dato3: 'Valor8', dato4: 'Valor9', dato5: 'Valor10' },
    { dato1: 'Valor11', dato2: 'Valor12', dato3: 'Valor13', dato4: 'Valor14', dato5: 'Valor15' },
    { dato1: 'Valor1', dato2: 'Valor2', dato3: 'Valor3', dato4: 'Valor4', dato5: 'Valor5' },
    { dato1: 'Valor6', dato2: 'Valor7', dato3: 'Valor8', dato4: 'Valor9', dato5: 'Valor10' },
    { dato1: 'Valor11', dato2: 'Valor12', dato3: 'Valor13', dato4: 'Valor14', dato5: 'Valor15' },
    { dato1: 'Valor1', dato2: 'Valor2', dato3: 'Valor3', dato4: 'Valor4', dato5: 'Valor5' },
    { dato1: 'Valor6', dato2: 'Valor7', dato3: 'Valor8', dato4: 'Valor9', dato5: 'Valor10' },
    { dato1: 'Valor11', dato2: 'Valor12', dato3: 'Valor13', dato4: 'Valor14', dato5: 'Valor15' },
    { dato1: 'Valor1', dato2: 'Valor2', dato3: 'Valor3', dato4: 'Valor4', dato5: 'Valor5' },
    { dato1: 'Valor6', dato2: 'Valor7', dato3: 'Valor8', dato4: 'Valor9', dato5: 'Valor10' },
    { dato1: 'Valor11', dato2: 'Valor12', dato3: 'Valor13', dato4: 'Valor14', dato5: 'Valor15' },
    { dato1: 'Valor1', dato2: 'Valor2', dato3: 'Valor3', dato4: 'Valor4', dato5: 'Valor5' },
    { dato1: 'Valor6', dato2: 'Valor7', dato3: 'Valor8', dato4: 'Valor9', dato5: 'Valor10' },
    { dato1: 'Valor11', dato2: 'Valor12', dato3: 'Valor13', dato4: 'Valor14', dato5: 'Valor15' },
    // Agrega más datos según sea necesario
];

function Graphics() {
    const [imageUrls, setImageUrls] = useState([]);

    useEffect(() => {
        // Realiza la solicitud para obtener las imágenes
        fetchImages();
    }, []);

    const fetchImages = async () => {
        try {
            // Realiza la solicitud para obtener las imágenes (reemplaza 'url_de_tu_servicio' con la URL de tu servicio)
            const response = await fetch('url_de_tu_servicio');
            const data = await response.json();

            // Convierte las imágenes en base64 y las almacena en el estado
            const urls = data.map(image => `data:image/png;base64,${image.base64}`);
            setImageUrls(urls);
        } catch (error) {
            console.error('Error al obtener las imágenes:', error);
        }
    };

    return (
        <div className="div-graphics-container">
            <div className="div-container-data-graf">
                <div className="graphics-container">
                    <div className="static-data">
                        <div className="card-cont-static">
                            <div className="calculo-static-data">
                                <div className="div-img-calculo">
                                    <img src="/Icon/calculo.svg" alt="" className="img-calculo" />
                                </div>
                                <div className='static'>
                                    <Card
                                        dato1='324'
                                        dato2='9'
                                        dato3='32'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="div-table table-container">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Dato 1</th>
                                    <th>Dato 2</th>
                                    <th>Dato 3</th>
                                    <th>Dato 4</th>
                                    <th>Dato 5</th>
                                </tr>
                            </thead>
                            <tbody className='div-tbody'>
                                {data.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.dato1}</td>
                                        <td>{item.dato2}</td>
                                        <td>{item.dato3}</td>
                                        <td>{item.dato4}</td>
                                        <td>{item.dato5}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className='EnBase'>
                        <h2>Imágenes:</h2>
                        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                            {imageUrls.map((url, index) => (
                                <div key={index} style={{ margin: '10px', textAlign: 'center' }}>
                                    <img src={url} alt={`Imagen ${index + 1}`} style={{ maxWidth: '480px', maxHeight: '480px' }} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Graphics;
