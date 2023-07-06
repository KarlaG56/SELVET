import Card from "./Card";

function Data() {
    return (
        <div className="div-dispositive-container">
            <div className="div-register-dispositive">
                <div className="div-form-container ">
                    <div className="icon-adminD">
                        <img className="img-dispositive" src="/Icon/dialpad.svg" alt="" />
                    </div>

                    <form action="">
                        <div className="div-inf-disp">
                            <label className="txt-form-admin" htmlFor="">Alias</label>
                            <input className="input-admin" type="text" />
                        </div>

                        <div className="div-inf-disp">
                            <label className="txt-form-admin" htmlFor="">Número de serie</label>
                            <input className="input-admin" type="text" />
                        </div>
                        <div className="div-btn-disp">
                            <button className="btn-disp">Registrar</button>
                        </div>
                    </form>
                </div>

                <div className="div-scrollData-form">
                    <div className="header-scrollD">
                        <a className="txt-scroll">Recientemente agregados</a>
                    </div>

                    <div className="body-scroll">
                        <Card
                        nombre="KALA"
                        number="1244"
                        />

                    </div>

                    
                </div>
            </div>
        </div>
    )
}

export default Data;
