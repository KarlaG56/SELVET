import { Link } from 'react-router-dom';

function Data() {
    return (
        <div className="div-editPerfil-container">
            <div className="div-form-editPerfil">
                <div className="div-form">
                    <div className="div-icon-editPerfil">
                        <img src="/Icon/edit.svg" className="icon-edit-circle" />
                    </div>
                    <form >
                        <div className="div-data-Editperfil">
                            <label htmlFor="" className="txt-editPerfil-form">Nombre</label>
                            <input type="text" name='edNameA' className="input-editPerfil-form" required />
                        </div>

                        <div className="div-data-Editperfil">
                            <label htmlFor="" className="txt-editPerfil-form">Correo electrónico</label>
                            <input type="email" name='edEmailA' className="input-editPerfil-form" required />
                        </div>

                        <div className="div-data-Editperfil">
                            <label htmlFor="" className="txt-editPerfil-form">Teléfono</label>
                            <input type="text" name='edNumA' className="input-editPerfil-form" required />
                        </div>

                        <div className="div-data-Editperfil">
                            <label htmlFor="" className="txt-editPerfil-form">Contraseña</label>
                            <input type="password" name='edPassA' className="input-editPerfil-form" required />
                        </div>

                        <div className="div-data-Editperfil">
                            <label htmlFor="" className="txt-editPerfil-form">Confirmar contraseña</label>
                            <input type="password" name='edPassCA' className="input-editPerfil-form" required />
                        </div>

                        <div className="div-btn-Editperfil">
                            <Link to="/Perfil-administrador" className="div-btn-cancel">
                                <button className="btn-cancel">Editar</button>
                            </Link>

                            <div className='div-btn-guardar'>
                                <button className="btn-guardar">Guardar </button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Data;