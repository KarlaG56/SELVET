import "../../assets/Styles/CardAdministration.css";

function Card(props) {
    return (
        <div className="div-card-users">
            <div className="div-txt-card-user">
                <p className="txt-principal" > {props.producto}</p>
                <p className="txt-card-data">$ {props.precio}</p>
                <p className="txt-principal" > {props.cantidad}</p>
                <p className="txt-card-data"> {props.categoria}</p>
                <p className="txt-card-data"> {props.duracion}</p>

                <p className="txt-card-data-number"> Fecha: <p id="Nlaboratory"> {props.fecha}</p></p>
            </div>

            <div className="div-btn-card">
                <button className="btn-card">Borrar</button>
            </div>
        </div>
    )
}

export default Card;