import AbilityMenu from "../AbilityMenu";
import "./styles.css";

export default function Ability() {

    return (

        <>
            <section id="abilitys" className="ptf-ability-section">

                <div className="ptf-ability-container">
                    <div className="ptf-ability-title">
                        <svg
                            width="61"
                            height="20"
                            viewBox="0 0 61 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">

                            <rect width="54"
                                height="4"
                                rx="2"
                                fill="#0f7db8"
                                fillOpacity="0.58"></rect>

                            <rect y="16"
                                width="54"
                                height="4"
                                rx="2"
                                fill="#0f7db8"
                                fillOpacity="0.58"></rect>

                            <rect x="7"
                                y="8"
                                width="54"
                                height="4"
                                rx="2"
                                fill="#0f7db8"
                                fillOpacity="0.58"></rect>
                        </svg>
                        <h1> Habilidades </h1>
                        <svg
                            width="61"
                            height="20"
                            viewBox="0 0 61 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">

                            <rect width="54"
                                height="4"
                                rx="2"
                                fill="#0f7db8"
                                fillOpacity="0.58"></rect>

                            <rect y="16"
                                width="54"
                                height="4"
                                rx="2"
                                fill="#0f7db8"
                                fillOpacity="0.58"></rect>

                            <rect x="7"
                                y="8"
                                width="54"
                                height="4"
                                rx="2"
                                fill="#0f7db8"
                                fillOpacity="0.58"></rect>
                        </svg>
                    </div>


                </div>

                <AbilityMenu />

            </section>
        </>
    )
}