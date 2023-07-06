import Body from "../AdminDispositive/Body";
import Header from "../Header";
import Aside from "../Aside";
import '../../assets/Styles/Administration.css';

function AdminDispositive() {
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

export default AdminDispositive;