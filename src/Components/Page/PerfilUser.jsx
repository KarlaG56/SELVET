import Header from "../Header";
import Aside from "../Aside";
import Body from "../Perfil/User/Data"
import "../../assets/Styles/CardPerfil.css"


function PerfilUser(){
    return(
        <div className="background">
            <Header />
            <Aside />
            <div className="div-contenido-container">
                <div className="contenido-body">
                  <Body/>
                </div>
            </div>
        </div>
    )
}

export default PerfilUser;