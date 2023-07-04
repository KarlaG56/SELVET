import { Link } from "react-router-dom";

function Data() {
    return (
        <div className="div-container">
            <div className="div-register-container">
                <div className="div-icon-regist">
                    <img className="img-LogoSelvet-regist" src="/Icon/IconSelvet.png"></img>
                    <a className="form-title-regist">Registro</a>
                </div>

                <form action="" className="form-Regist">

                    <div className="txt_field-regist">
                        <input type="text" id="nameRegist" required />
                        <span></span>
                        <label>Nombre de usuario</label>
                    </div>

                    <div className="txt_field-regist">
                        <input type="email" id="emailRegist" required />
                        <span></span>
                        <label>Correo electrónico</label>
                    </div>

                    <div className="txt_field-regist">
                        <input type="text" id="numRegist" required />
                        <span></span>
                        <label>Teléfono</label>
                    </div>

                    <div className="txt_field-regist">
                        <input type="password" id="passRegist" required />
                        <span></span>
                        <label>Contraseña</label>
                    </div>

                    <div className="txt_field-regist">
                        <input type="password" id="cpassRegist" required />
                        <span></span>
                        <label>Confirmar contraseña</label>
                    </div>
                    <button className='form-btn-regist'>Registrarse</button>
                </form>
                <div className="signup_link">
                    ¿Ya cuentas con alguna cuenta? <Link className='form-link-regist' to="/Inicio-sesion">Iniciar sesión</Link>
                </div>
            </div>
        </div>
    )
}

export default Data;