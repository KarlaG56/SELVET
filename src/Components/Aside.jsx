import { Link } from "react-router-dom";
import '.././assets/Styles/Menu.css';

function Aside() {
    return (
        <div className="div-contanier-aside" >
            <div className="div-logo-white">
                <img className="img-logo-white" src="/Img/Logo-white.png" alt="" />
            </div>
            <hr />
            <div className="div-menu"></div>
            <Link to="/Administracion-dispositivo" >
                <div className="option" >
                    <img className="icon-menu" src="/Icon/dashboard-solid-240.svg" />
                    <a className="txt-option" href="">Administración de Laboratorios</a>
                </div>
            </Link>

            <Link to='/Administracion-usuarios' >
                <div className="option" >
                    <img className="icon-menu" src="/Icon/user-plus.svg" />
                    <a className="txt-option" href="">Administración de usuarios</a>
                </div>
            </Link>

            <Link to='/Metricas'  >
                <div className="option" >
                    <img className="icon-menu" src="/Icon/metrica.svg" />
                    <a className="txt-option" href="">Métricas</a>
                </div>
            </Link>

            <Link to='/Perfil-administrador' >
                <div className="option" >
                    <img className="icon-menu" src="/Icon/user.svg" />
                    <a className="txt-option" href="">Perfil</a>
                </div>
            </Link>

            <Link to='/Manual-usuario'  >
                <div className="option" >
                    <img className="icon-menu" src="/Icon/book-bookmark.svg" />
                    <a className="txt-option" href="">Manual de usuario</a>
                </div>
            </Link>


            <Link to="" className="div-btn-pdf" >
                <img className="icon-menu-pdf" src="/Icon/power-off.svg" />
                <button className="btn-pdf">Cerrar sesión</button>
            </Link>

        </div>
    )
}

export default Aside;

