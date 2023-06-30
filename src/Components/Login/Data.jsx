import { Link } from 'react-router-dom';

function Data() {
    return (
        <div className="div-container">
            <div className="div-Login-container">
                <div className="div-icon">
                    <img className="img-LogoSelvet" src="/Icon/IconSelvet.png"></img>
                    <a className="form-title">Iniciar sesión</a>
                </div>

                <form action="" className="form-Login">
                    <div className="txt_field">
                        <input type="email" id="correoLogin" required />
                        <span></span>
                        <label>Correo electrónico</label>
                    </div>

                    <div className="txt_field">
                        <input type="password" id="passwordLogin" required />
                        <span></span>
                        <label>Contraseña</label>
                    </div>

                    <button className='form-btn'>Iniciar sesión</button>

                </form>
                <div className="signup_link">
                    ¿No cuentas con alguna cuenta? <Link className='form-link' to="/Registro">Crear cuenta</Link>
                </div>
            </div>
        </div>
    )
}

export default Data;