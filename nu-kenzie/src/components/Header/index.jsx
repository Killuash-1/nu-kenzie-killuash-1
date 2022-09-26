import logoHeader from "/src/assets/img/Logo Kenzie.svg"
import "./style.css"
export default function Header({ setLogin }) {
    return (

        <div className="header_container">
            <nav>
                <img src={logoHeader} alt="Logo NuKenzie" />
                <button className="header_button" onClick={() => setLogin(false)}>
                    
                    Início
                </button>
            </nav>
        </div>
    )
}