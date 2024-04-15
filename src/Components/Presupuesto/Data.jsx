import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDatos } from '../../context/context'; 

function Data() {
    const { guardarDatosPrimerVista } = useDatos();
  const [nuevosDatos, setNuevosDatos] = useState({ monto: '', duracion: '', intervalo: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevosDatos((prevDatos) => ({
      ...prevDatos,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    guardarDatosPrimerVista(nuevosDatos);
  };



    return (
        <div className="div-editPerfil-container">
            <div className="div-form-editPerfil">
                <div className="div-form">
                    <div className="div-icon-editPerfil">
                        <img src="/Icon/edit.svg" className="icon-edit-circle" />
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="div-data-Editperfil">
                            <label htmlFor="" className="txt-editPerfil-form">Monto</label>
                            <input type="text" name='monto' value={nuevosDatos.monto} onChange={handleChange} className="input-editPerfil-form" required />
                        </div>

                        <div className="div-data-Editperfil">
                            <label htmlFor="" className="txt-editPerfil-form">Ingrese la duración deseada de la planeacion(días):</label>
                            <input type="text" name='duracion' value={nuevosDatos.duracion} onChange={handleChange} className="input-editPerfil-form" required />
                        </div>

                        <div className="div-data-Editperfil">
                            <label htmlFor="" className="txt-editPerfil-form">Cada cuanto recibe el presupuesto(días):</label>
                            <input type="text" name='intervalo' value={nuevosDatos.intervalo} onChange={handleChange} className="input-editPerfil-form" required />
                        </div>



                        <div className='div-btn-guardar'>
                            <button className="btn-guardar">Guardar </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Data;