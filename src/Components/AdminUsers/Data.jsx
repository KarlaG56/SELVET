import Card from "./Card";

function Data() {
    return (
        <div className="div-dispositive-container">
            <div className="div-register-dispositive">
                <div className="div-form-container ">
                    <div className="icon-adminU">
                        <img className="img-user" src="/Icon/id-card.svg" alt="" />
                    </div>

                    <form action="">
                        <div className="div-inf-user">
                            <label className="txt-form-admin-user" htmlFor="">Nombre</label>
                            <input className="input-admin" type="text" name="nameEmp" required/>
                        </div>

                        <div className="div-inf-user">
                            <label className="txt-form-admin-user" htmlFor="">Correo electrónico</label>
                            <input className="input-admin" type="email" name="emailEmp" required />
                        </div>

                        <div className="div-inf-user">
                            <label className="txt-form-admin-user" htmlFor="">Télefono</label>
                            <input className="input-admin" type="text" name="numEmp" required />
                        </div>

                        <div className="div-inf-user">
                            <label className="txt-form-admin-user" htmlFor="">Contraseña</label>
                            <input className="input-admin" type="password"  name="passEmp" required />
                        </div>

                        <div className="div-inf-user">
                            <label className="txt-form-admin-user" htmlFor="">Confirmar contraseña</label>
                            <input className="input-admin" type="password"  name="passCEmp" required />
                        </div>

                        <div className="div-inf-select">
                            <label className="txt-form-admin-user" htmlFor="">Laboratorio:</label>
                            <select className='select-user' name="labEmp" id="" required >
                                <option value="">Seleccionar</option>
                                <option value="">Selecciona89r</option>
                            </select>
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

                    <div className="scroll">
                        <div className="body-scroll">

                            <Card
                                nombre="Muestras"
                                number="124898084"
                                laboratory="24"
                            />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Data;
