import "../../assets/Styles/CardSatic.css"

function Card(props){
    return(
        <div className="card-static-container">
            <div className="txt-static-metricas">
                <p href="" className="txt-title-calculo">Presupuesto</p>
                <p href="" className="txt-calculo">$ {props.dato1} </p>
            </div>

            <div className="txt-static-metricas">
                <p href="" className="txt-title-calculo">Ahorro</p>
                <p href="" className="txt-calculo">$ {props.dato2} </p>
            </div>

            <div className="txt-static-metricas">
                <p href="" className="txt-title-calculo">Total</p>
                <p href="" className="txt-calculo">${props.dato3} </p>
            </div>

          
        </div>

    )
}

export default Card;