import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='Header'>

            <div className="div-logo">
                <Link to='/' id='Logo'>
                    <div>
                        <img className='section-0' src="/Img/Logo-black.svg" alt="" />

                    </div>
                </Link>
            </div>

            <div className="navbar">
                <Link to='/' id='inicio'>
                    <div className='section-1' >
                        <a >Inicio</a>
                    </div>
                </Link>

                <Link to='/AcercaDe' id='acercaDe'>
                    <div className='section-2'>
                        <a href="">Acerca de</a>
                    </div>
                </Link>

                <Link id='section-button'>
                    <button className='section-3'>Iniciar sesion</button>
                </Link>

            </div>



        </div>
    );
}

export default Header;