import {Link} from "react-router-dom";

function Data() {
    return (
        <div className="div-perfil-container">
            <div className="div-form-perfil">
                <div className="div-form">
                    <div className="div-icon-perfil">
                        <img src="/Icon/user-circle.png" className="icon-user-circle" />
                    </div>
                    <form >
                        <div className="div-data-perfil">
                            <label htmlFor="" className="txt-perfil-form">Nombre</label>
                            <input type="text" className="input-perfil-form" required />
                        </div>

                        <div className="div-data-perfil">
                            <label htmlFor="" className="txt-perfil-form">Correo electrónico</label>
                            <input type="email" className="input-perfil-form" required/>
                        </div>

                        <div className="div-data-perfil">
                            <label htmlFor="" className="txt-perfil-form">Teléfono</label>
                            <input type="text" className="input-perfil-form" required />
                        </div>

                        <div className="div-data-perfil">
                            <label htmlFor="" className="txt-perfil-form">Contraseña</label>
                            <input type="password" className="input-perfil-form" required />
                        </div>

                        <Link to="/Editar-Perfil-administrador" className="div-btn-perfil">
                           <button className="btn-perfil">Editar</button>
                        </Link>

                        
                    </form>
                </div>
            </div>


        </div>
    )
}

export default Data;