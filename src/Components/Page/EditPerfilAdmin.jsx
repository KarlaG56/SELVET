import Header from "../Header";
import Aside from "../Aside";
import Body from "../EditarPerfil/Admin/Body";
import '../../assets/Styles/EditarPerfil.css';

function EditPerfilAdmin(){
    return(
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

export default EditPerfilAdmin;