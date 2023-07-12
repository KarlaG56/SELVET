import {Link} from "react-router-dom";

function Data() {
    return (
        <div className="div-Body">

            <div className="div-information">
                <h4 className="title-selvet">Alerta química: tu entorno seguro, nuestro software te avisa</h4>
                <p className="text">Monitoreo constante y alerta ante posibles riesgos. Descubre cómo podemos 
                    asegurar un ambiente de trabajo seguro y protegido para ti y tu equipo.</p>
                <Link to="/Registro" className="div-button">
                    <button className="btn-register">Empieza ya</button>
                </Link>
            </div>

            <div className="div-img">
                <img className='img-medicine' src="/Img/Medicine.svg" alt="" />
            </div>
        </div>
    );
}

export default Data;