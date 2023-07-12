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
                            <Link>
                                <img src="/Icon/facebook.png" className="icon-redes" />
                            </Link>

                            <Link>
                                <img src="/Icon/instagram.png" className="icon-redes" />
                            </Link>

                            <Link>
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