import { Link } from "react-router-dom";
import '.././assets/Styles/Menu.css';

function Aside() {
    return (
        <div className="div-contanier-aside" >

            <div className="div-menu"></div>
            <Link  >
                <div className="option-1" >
                    <a className="text-option-1" href="">Primero</a>
                </div>

            </Link>

            <Link >
                <div className="option-1">
                    <a className="text-option-1" href="">Segundo</a>
                </div>

            </Link>

            <Link >
                <div className="ul">
                    <a href="">Tercero</a>
                </div>
            </Link>


        </div>
    )
}

export default Aside;

