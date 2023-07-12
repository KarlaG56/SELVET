function Cards() {
    return (
        <div className="div-card-container-inf">

            <div className="div-card-container">
                <div className="title-benefits-container">
                    <h4 className="title-benefits">Beneficios</h4>
                </div>

                <div className="div-cards-datas">

                    <div className="cards-container-data">
                        <div className="div-card-benefits">
                            <img className="img-card-benefits" src="/Img/real-time.svg" />
                            <a className="txt-card-benefits">Monitoreo en tiempo real</a>
                            <p className="cont-card-benefits">Accede instantáneamente a información vital sobre
                                temperatura, humedad y gases para garantizar
                                un ambiente seguro y detectar anomalías de manera rápida.</p>
                        </div>

                        <div className="div-card-benefits">
                            <img className="img-card-benefits" src="/Img/security.svg" />
                            <a className="txt-card-benefits">Seguridad</a>
                            <p className="cont-card-benefits">Cuenta con medidas de protección 
                            avanzadas para resguardar tus datos confidenciales de manera efectiva</p>
                        </div>

                        <div className="div-card-benefits">
                            <img className="img-card-benefits" src="/Img/remote.svg" />
                            <a className="txt-card-benefits">Acceso remoto</a>
                            <p className="cont-card-benefits"> Mantén el control total de tu laboratorio estés donde estés. Accede a 
                            los datos y configuraciones de monitoreo desde cualquier dispositivo con conexión a internet.</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>


    )
}

export default Cards;