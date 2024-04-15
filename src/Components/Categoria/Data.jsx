import Card from "./Card";
import { useDatos } from "../../context/context";
import { useState } from "react";

function Data() {
    const { datos, guardarDatos } = useDatos();
    const [nuevaCategoria, setNuevaCategoria] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nuevaCategoria.trim() !== '') {
            const nuevasCategorias = [...datos.categorias];
            nuevasCategorias.push(nuevaCategoria);
            guardarDatos({ ...datos, categorias: nuevasCategorias });
        }
        console.log("Data", datos);
    }

    return (
        <div className="div-dispositive-container">
            <div className="div-register-dispositive">
                <div className="div-form-container ">
                    <div className="icon-adminD">
                        <img className="img-dispositive" src="/Icon/dialpad.svg" alt="" />
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="div-inf-disp">
                            <label className="txt-form-admin" htmlFor="">Ingrese nueva categoría</label>
                            <input className="input-admin" name="alias" value={nuevaCategoria} onChange={(e) => setNuevaCategoria(e.target.value)} placeholder="Nueva categoría" type="text" required/>
                        </div>

                       
                        <div className="div-btn-disp">
                            <button type="submit" className="btn-disp">Registrar</button>
                        </div>
                    </form>

                </div>

                <div className="div-scrollData-form">
                    <div className="header-scrollD">
                        <a className="txt-scroll">Categorias</a>
                    </div>

                    <div className="scroll">
                        <div className="body-scroll">

                            <br></br>
                            <br></br>
                            {datos.categorias.map((categoria, index) => (
                                <div key={index} className="categoria-item">
                                    <p>{categoria}</p>
                                </div>
                            ))}
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Data;
