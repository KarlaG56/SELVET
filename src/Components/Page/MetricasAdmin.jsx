import Body from "../Metricas/Admin/Body";
import Header from "../Header";
import Aside from "../Aside";
import '../../assets/Styles/Metricas.css';

function MetricasAdmin() {
    return (
        <div className="background">
            <Header />
            <Aside />
            <div className="div-contenido-container">
                <div className="contenido-body">
                    <Body />
                </div>
            </div>
        </div>
    )
}

export default MetricasAdmin;