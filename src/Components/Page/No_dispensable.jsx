import Body from "../Product/Body";
import Aside from "../Aside";
import '../../assets/Styles/Administration.css';

function No_dispensable() {
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

export default No_dispensable;