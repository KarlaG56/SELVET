import Body from '../Perfil/Admin/Body';
import Header from "../Header";
import Aside from "../Aside";
import '../../assets/Styles/Perfil.css';


function PerfilAdmin() {
    return (
        <div className="background">
            <Header />
            <Aside />
            <div className="div-contenido-container">
                <div className="contenido-body">
                    <Body />
                </div>
            </div>
        </div>
    )
}

export default PerfilAdmin;