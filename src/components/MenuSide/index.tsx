import "./styles.css";

import { useEffect, useRef } from "react";
import iconBack from "../../assets/Icons/Back.svg";

type MenuSideProps = {
    handleCloseDialog: () => void;
};

export default function MenuSide({ handleCloseDialog }: MenuSideProps) {
    const menuSideRef = useRef<HTMLDivElement | null>(null);
    

    const handleClickOutside = (event: MouseEvent) => {
        if (menuSideRef.current && !menuSideRef.current.contains(event.target as Node)) {
            handleCloseDialog();
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [handleCloseDialog]);

    return (
        <div className="ptf-menu-side-container">
            <div className="ptf-menu-side" ref={menuSideRef}>
                <div className="ptf-menu-back">
                    <img src={iconBack} onClick={handleCloseDialog} />
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