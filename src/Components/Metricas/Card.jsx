import "../../assets/Styles/CardSatic.css"

function Card(props){
    return(
        <div className="card-static-container">
            <div className="txt-static-metricas">
                <a href="" className="txt-title-calculo">Moda</a>
                <a href="" className="txt-calculo"> {props.moda} </a>
            </div>

            <div className="txt-static-metricas">
                <a href="" className="txt-title-calculo">Media</a>
                <a href="" className="txt-calculo"> {props.media} </a>
            </div>

            <div className="txt-static-metricas">
                <a href="" className="txt-title-calculo">Mediana</a>
                <a href="" className="txt-calculo"> {props.mediana} </a>
            </div>

            <div className="txt-static-metricas">
                <a href="" className="txt-title-calculo"> Desviación media </a>
                <a href="" className="txt-calculo"> {props.desvMed} </a>
            </div>

            <div className="txt-static-metricas">
                <a href="" className="txt-title-calculo"> Desviacíon estandar </a>
                <a href="" className="txt-calculo"> {props.desvStand} </a>
            </div>

            <div className="txt-static-metricas">
                <a href="" className="txt-title-calculo"> Varianza </a>
                <a href="" className="txt-calculo"> {props.varianza} </a>
            </div>
        </div>

    )
}

export default Card;