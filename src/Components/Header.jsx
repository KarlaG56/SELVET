import '.././assets/Styles/Menu.css';
function Header() {
    return (
        <div className="div-header-container">
            <div className="div-container-nav">
                <div className='div-select-container-lab'>
                    <a className='txt-select-lab' href="">Seleccionar:</a>
                    <select className='select-lab' name="" id="">
                        <option className='opt-select' value=""> Laboratorio</option>
                        <option className='opt-select' value=""> Laboratlllorio</option>
                        <option className='opt-select' value=""> Laboratorio 78</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Header;