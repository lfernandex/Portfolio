import "./styles.css";

import iconBack from "../../assets/Icons/Back.svg";



export default function MenuSide() {
   

    return (
        <div className="ptf-menu-side-container">
            <div className="ptf-menu-side" >
                <div className="ptf-menu-back">
                    <img src={iconBack} />
                </div>
                <ul className="ptf-menu-side-itens">
                    <li>Inicio</li>
                    <li>Sobre</li>
                    <li>Projetos</li>
                    <li>Habilidades</li>
                </ul>
            </div>
        </div>
    );
}