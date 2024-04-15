import Aside from "../Aside";
import Body from "../Presupuesto/Body";
import '../../assets/Styles/EditarPerfil.css';

function Presupuesto(){
    return(
        <div className="background">
            <Aside />
            <div className="div-contenido-container">
                <div className="contenido-body">
                    <Body />
                </div>
            </div>
        </div>
    )
}

export default Presupuesto;