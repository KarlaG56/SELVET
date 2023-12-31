import { Link } from "react-router-dom"

function Footer() {
    return (
        <div className="footer">
            <div className="div-contaneiner-data-footer">
                <div className="container-redes">
                    <div className="title-redes-container">
                        <h3 className="title-redes-sociales">Redes sociales</h3>
                    </div>
                    <div className="redes-container">

                        <div className="redes">
                            <Link to="https://www.facebook.com/profile.php?id=100094573431283&mibextid=ZbWKwL">
                                <img src="/Icon/facebook.png" className="icon-redes" />
                            </Link>

                            <Link to="https://www.instagram.com/selvetlaboratory/">
                                <img src="/Icon/instagram.png" className="icon-redes" />
                            </Link>

                            <Link to="">
                                <img src="/Icon/twitter.png" className="icon-redes" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="div-txt-end">
                <a className="txt-end">© 2023 · SELVET· All rights reserved</a>
            </div>
        </div>
    )
}

export default Footer;