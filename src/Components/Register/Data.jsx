function Data(){
    return(
        <div className="div-container">
        <div className="div-Login-container">
            <div className="div-icon">
                <img className="img-LogoSelvet" src="/Icon/IconSelvet.png"></img>
                <a className="form-title">Registro</a>
            </div>

            <form action="" className="form-Login">

            <div className="txt_field">
                    <input type="text" id="nameRegist" required />
                    <span></span>
                    <label>Nombre de usuario</label>
                </div>

                <div className="txt_field">
                    <input type="email" id="emailRegist" required />
                    <span></span>
                    <label>Correo electrónico</label>
                </div>

                <div className="txt_field">
                    <input type="text" id="numRegist" required />
                    <span></span>
                    <label>Teléfono</label>
                </div>

                <div className="txt_field">
                    <input type="password" id="passRegist" required />
                    <span></span>
                    <label>Contraseña</label>
                </div>

                <div className="txt_field">
                    <input type="password" id="cpassRegist" required />
                    <span></span>
                    <label>Confirmar contraseña</label>
                </div>



                <button className='form-btn'>Registrarse</button>

            </form>
            <div className="signup_link">
                ¿Ya cuentas con alguna cuenta? <Link className='form-link' to="/Inicio_sesion">Iniciar sesión</Link>
            </div>
        </div>
    </div>
    )
}

export default Data;