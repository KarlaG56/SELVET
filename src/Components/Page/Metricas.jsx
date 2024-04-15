import Body from "../Metricas/Body";
import Aside from "../Aside";
import '../../assets/Styles/Metricas.css';

function Metricas() {
    return (
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

export default Metricas;