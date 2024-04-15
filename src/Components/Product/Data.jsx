import React, { useState } from 'react';
import { useDatos } from '../../context/context';

function Data() {
    const { datos, guardarDatos } = useDatos();
    const [nuevoIndispensable, setNuevoIndispensable] = useState({
        producto: '',
        precio: '',
        cantidad: '',
        categoria: '',
        duracion: '',
        fecha: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nuevoIndispensable.producto.trim() !== '' && nuevoIndispensable.precio.trim() !== '' && nuevoIndispensable.cantidad.trim() !== '' && nuevoIndispensable.categoria.trim() !== '' && nuevoIndispensable.duracion.trim() !== '' && nuevoIndispensable.fecha.trim() !== '') {
            const nuevosIndispensables = [...datos.indispensables];
            nuevosIndispensables.push(nuevoIndispensable);
            guardarDatos({ ...datos, indispensables: nuevosIndispensables });
            setNuevoIndispensable({
                producto: '',
                precio: '',
                cantidad: '',
                categoria: '',
                duracion: '',
                fecha: ''
            });
        }
    }

    return (
        <div className='container'>
            <div className="div-dispositive-container">
                <div className="div-register-dispositive">
                    <div className="div-form-container ">
                        <form onSubmit={handleSubmit}>
                            <div className="div-inf-user">
                                <label className="txt-form-admin-user" htmlFor="">Producto</label>
                                <input className="input-admin" type="text" name="product" value={nuevoIndispensable.producto} onChange={(e) => setNuevoIndispensable({ ...nuevoIndispensable, producto: e.target.value })} required />
                            </div>

                            <div className="div-inf-user">
                                <label className="txt-form-admin-user" htmlFor="">Precio</label>
                                <input className="input-admin" type="text" name="precio" value={nuevoIndispensable.precio} onChange={(e) => setNuevoIndispensable({ ...nuevoIndispensable, precio: e.target.value })} required />
                            </div>

                            <div className="div-inf-user">
                                <label className="txt-form-admin-user" htmlFor="">Cantidad</label>
                                <input className="input-admin" type="text" name="cantidad" value={nuevoIndispensable.cantidad} onChange={(e) => setNuevoIndispensable({ ...nuevoIndispensable, cantidad: e.target.value })} required />
                            </div>

                            <div className="div-inf-select">
                                <label className="txt-form-admin-user" htmlFor="">Categoría:</label>
                                <select className='select-user' name="labEmp" value={nuevoIndispensable.categoria} onChange={(e) => setNuevoIndispensable({ ...nuevoIndispensable, categoria: e.target.value })} required >
                                    <option value="">Seleccionar</option>
                                    {datos.categorias.map((categoria, index) => (
                                        <option key={index} value={categoria}>{categoria}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="div-inf-user">
                                <label className="txt-form-admin-user" htmlFor="">Duración</label>
                                <input className="input-admin" type="text" name="duracionProduct" value={nuevoIndispensable.duracion} onChange={(e) => setNuevoIndispensable({ ...nuevoIndispensable, duracion: e.target.value })} required />
                            </div>

                            <div className="div-inf-user">
                                <label className="txt-form-admin-user" htmlFor="">Fecha</label>
                                <input className="input-admin" type="date" name="fecha" value={nuevoIndispensable.fecha} onChange={(e) => setNuevoIndispensable({ ...nuevoIndispensable, fecha: e.target.value })} required />
                            </div>

                            <div className="div-btn-disp">
                                <button className="btn-disp" type="submit">Registrar</button>
                            </div>
                        </form>
                    </div>

                    <div className="div-scrollData-form">
                        <div className="header-scrollD">
                            <a className="txt-scroll">Indispensables</a>
                        </div>

                        <div className="scroll">
                            <div className="body-scroll">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Producto</th>
                                            <th>Precio</th>
                                            <th>Cantidad</th>
                                            <th>Categoría</th>
                                            <th>Duración</th>
                                            <th>Fecha</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {datos.indispensables.map((item, index) => (
                                            <tr key={index}>
                                                <td>{item.producto}</td>
                                                <td>{item.precio}</td>
                                                <td>{item.cantidad}</td>
                                                <td>{item.categoria}</td>
                                                <td>{item.duracion}</td>
                                                <td>{item.fecha}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Data;
