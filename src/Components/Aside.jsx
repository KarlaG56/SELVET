import { Link } from "react-router-dom";
import '.././assets/Styles/Menu.css';

function Aside() {
    return (
        <div className="div-contanier-aside" >
            <div className="menu">
                <Link to="/" className="link-no-underline" >
                    <button className="option" >
                        <p className="txt-option" href="">Presupuesto</p>
                    </button>
                </Link>

                <Link to="/Categoria" className="link-no-underline" >
                    <button className="option" >
                        <p className="txt-option" href="">Categoría</p>
                    </button>
                </Link>

                <Link to='/Dispensable'className="link-no-underline" >
                    <button className="option" >
                        <p className="txt-option" href="">Dispensable</p>
                    </button>
                </Link>

                <Link to='/No_dispensable'className="link-no-underline" >
                    <button className="option" >
                        <p className="txt-option" href="">No dispensables</p>
                    </button>
                </Link>

               

                <Link to='/Metricas'className="link-no-underline" >
                    <button
                        className="option" >
                        <p className="txt-option" href="">Resultado</p>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Aside;

