function Card(props) {
    return (
        <div>
            <div className="div-data-perfil">
                <label htmlFor="" className="txt-perfil">Nombre</label>
                <a type="text" className="txt-static-perfil" >{props.namePerfil} </a>
            </div>

            <div className="div-data-perfil">
                <label htmlFor="" className="txt-perfil">Correo electrónico</label>
                <a type="email" className="txt-static-perfil"> {props.emailPerfil} </a>
            </div>

            <div className="div-data-perfil">
                <label htmlFor="" className="txt-perfil">Teléfono</label>
                <a type="text" className="txt-static-perfil" >{props.phonePerfil} </a>
            </div>

            <div className="div-data-perfil">
                <label htmlFor="" className="txt-perfil">Contraseña</label>
                <a type="password" className="txt-static-perfil"> {props.passPerfil} </a>
            </div>

            <div className="div-data-perfil-lab">
                <label htmlFor="" className="txt-perfil">Laboratorio</label>
                <a type="password" className="txt-static-perfil-lab"> {props.LaboratioUser} </a>
            </div>
        </div>
    )
}

export default Card;