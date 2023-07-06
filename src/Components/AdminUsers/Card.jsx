import "../../assets/Styles/Card.css";

function Card(props) {
    return (
        <div className="div-card-users">
            <div className="div-txt-card">
                <a className="txt-principal" > {props.nombre}</a>
                <a className="txt-card-data"> {props.number}</a>
                <a className="txt-card-data-number"> Laboratorio: <p>{props.laboratory}</p></a>
            </div>

            <div className="div-btn-card">
                <button className="btn-card">Borrar</button>
            </div>
        </div>
    )
}

export default Card;