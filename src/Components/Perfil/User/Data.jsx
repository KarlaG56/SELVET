import {Link} from "react-router-dom";
import Card from "./Card";

function Data() {
    return (
        <div className="div-perfil-container">
            <div className="div-form-perfil">
                <div className="div-form">
                    <div className="div-icon-perfil">
                        <img src="/Icon/user-circle.png" className="icon-user-circle" />
                    </div>
                    <div >
                        <Card/>

                        <Link to="/Editar-Perfil" className="div-btn-perfil">
                           <button className="btn-perfil">Editar</button>
                        </Link>

                        
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Data;