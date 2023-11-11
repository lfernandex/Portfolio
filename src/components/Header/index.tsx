import MenuIcon from "../MenuIcon"
import "./styles.css"


export default function Header() {

    return (
        <>
            <header className="ptf-header-container">
                <nav className="ptf-nav-container">
                    <div className="pft-bar">

                        <div className="ptf-menu-bar">
                            <div className="ptf-header-icon">
                                <div className="ptf-icon">
                                    <h1> L.F  DEV </h1>
                                </div>

                                <div className="ptf-menu-icon">
                                    <MenuIcon />
                                </div>
                            </div>


                            <div className="ptf-menu-item">
                                <ul className="ptf-items">
                                    <li><a href="#home">Início</a></li>
                                    <li><a href="#abouteme">Sobre mim</a></li>
                                    <li><a href="#projects">Projetos</a></li>
                                    <li><a href="#certificates">Certificados</a></li>
                                    <li><a href="#abilitys">Habilidades</a></li>
                                    <li><a href="#contact">Contato</a></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </nav>
            </header>
        </>
    )
}