import Body from "../AdminUsers/Body";
import Header from "../Header";
import Aside from "../Aside";
import '../../assets/Styles/Administration.css';

function AdminUsers() {
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

export default AdminUsers;