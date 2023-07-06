import Body from '../PerfilAdmin/Body';
import Header from "../Header";
import Aside from "../Aside";


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