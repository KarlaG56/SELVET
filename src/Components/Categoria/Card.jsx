
import "../../assets/Styles/CardAdministration.css";

function Card(props) {
    return (
        <div className="div-card-admin">
            <div className="div-txt-card">
                <a className="txt-principal" > {props.nombre}</a>
            </div>

            <div className="div-btn-card">
                <button className="btn-card">Borrar</button>
            </div>
        </div>
    )
}

export default Card;
