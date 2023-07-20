import { Link } from "react-router-dom";
import { useState } from 'react';

function Data() {

    const Navigate = useNavigate();

    const [registo, setDataReg] = useState({
        nameReg: "",
        emailReg: "",
        numReg: "",
        passReg: "",
        passCReg: ""
    });


    const handleonChange = (e) => {

        console.log(e.target.value)
        setDataReg({
            ...registo,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(registo.emailReg+""+registo.numReg);
    }


    return (
        <div className="div-container">
            <div className="div-register-container">
                <div className="div-icon-regist">
                    <img className="img-LogoSelvet-regist" src="/Icon/IconSelvet.png"></img>
                    <a className="form-title-regist">Registro</a>
                </div>

                <form onSubmit={handleSubmit} className="form-Regist">

                    <div className="txt_field-regist">
                        <input type="text" onChange={handleonChange} id="nameRegist" name="nameReg" required />
                        <span></span>
                        <label>Nombre de usuario</label>
                    </div>

                    <div className="txt_field-regist">
                        <input type="email" onChange={handleonChange} id="emailRegist" name="emailReg" required />
                        <span></span>
                        <label>Correo electrónico</label>
                    </div>

                    <div className="txt_field-regist">
                        <input type="text" onChange={handleonChange} id="numRegist" name="numReg" required />
                        <span></span>
                        <label>Teléfono</label>
                    </div>

                    <div className="txt_field-regist">
                        <input type="password" onChange={handleonChange} id="passRegist" name="passReg" required />
                        <span></span>
                        <label>Contraseña</label>
                    </div>

                    <div className="txt_field-regist">
                        <input type="password" onChange={handleonChange} id="cpassRegist" name="passCReg" required />
                        <span></span>
                        <label>Confirmar contraseña</label>
                    </div>
                    <button type="submit" className='form-btn-regist'>Registrarse</button>
                </form>
                <div className="signup_link">
                    ¿Ya cuentas con alguna cuenta? <Link className='form-link-regist' to="/Inicio-sesion">Inicia sesión</Link>
                </div>
            </div>
        </div>
    )
}

export default Data;