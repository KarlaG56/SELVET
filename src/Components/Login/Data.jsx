import {  useState } from 'react';

import { Link } from 'react-router-dom';

function Data() {

    const [datos, setDatos] = useState({
        emailLogin: "",
        passLogin: ""
    });

    const handleonChange = (e) => {

        setDatos({
            ...datos,
            [e.target.name]: e.target.value

        })
    }

    const handleonSubmit = (e) => {
        e.preventDefault();

        console.log(datos.emailLogin + "" + datos.passLogin);
    }

    return (
        <div className="div-container">
            <div className="div-Login-container">
                <div className="div-icon">
                    <img className="img-LogoSelvet" src="/Icon/IconSelvet.png"></img>
                    <a className="form-title">Iniciar sesión</a>
                </div>

                <form onSubmit={handleonSubmit} className="form-Login">
                    <div className="txt_field">
                        <input
                            type="email"

                            name='emailLogin'
                            onChange={handleonChange}
                            required />
                        <span></span>
                        <label>Correo electrónico</label>
                    </div>

                    <div className="txt_field">
                        <input type="password"

                            name='passLogin'
                            onChange={handleonChange}
                            required />
                        <span></span>
                        <label>Contraseña</label>
                    </div>

                    <button type='submit' className='form-btn'>Iniciar sesión</button>

                </form>
                <div className="signup_link">
                    ¿No cuentas con alguna cuenta? <Link className='form-link' to="/Registro">Crear cuenta</Link>
                </div>
            </div>
        </div>
    )
}

export default Data;