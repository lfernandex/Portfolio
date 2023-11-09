
import "./styles.css"


export default function Header() {

    return (
       
            <header className="ptf-header-container">
                <nav className="ptf-nav-container">
                    <div className="pft-bar">

                        <div className="ptf-menu-bar">
                            <div className="ptf-header-icon">
                                <div className="ptf-icon">
                                    <h1> L.F  DEV </h1>
                                </div>

                                <div className="ptf-menu-icon">
                                    
                                </div>
                            </div>


                            <div className="ptf-menu-item">
                                <ul className="ptf-items">
                                    <li><a href="#inicio">Início</a></li>
                                    <li><a href="#sobre-mim">Sobre mim</a></li>
                                    <li><a href="#projetos">Projetos</a></li>
                                    <li><a href="#habilidades">Certificados</a></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </nav>
            </header>
       
    )
}