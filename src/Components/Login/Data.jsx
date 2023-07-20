import { useState } from 'react';

import { Link, useNavigate} from 'react-router-dom';

function Data() {

    const navigate = useNavigate();

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

        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json")
        myHeaders.append("Content-Type", "application/json")

        var raw = JSON.stringify({
            "email": datos.emailLogin,
            "password": datos.passLogin
        })

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        }

        fetch("https://backselvet.viewdns.net/api/validate", requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.status) {
                    localStorage.setItem("User", result)
                    result.response.type == Admin ? navigate("/Administracion-dispositivo") : navigate("/Metricas")
                }
            })
            .catch(err => console.log(err))
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
                        <input
                            type="password"
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