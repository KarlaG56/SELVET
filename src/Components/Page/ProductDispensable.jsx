import Body from "../Product/Body2";
import Aside from "../Aside";
import '../../assets/Styles/Administration.css';

function ProductDispensable() {
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

export default ProductDispensable;