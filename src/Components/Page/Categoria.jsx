import Body from "../Categoria/Body";
import Aside from "../Aside";
import '../../assets/Styles/Administration.css';

function Categoria() {
    return (
        <div className="background">
            <Aside />
            <div className="div-contenido-container">
                <div className="contenido-body">
                    <Body />
                </div>
            </div>
        </div>
    )
}

export default Categoria;