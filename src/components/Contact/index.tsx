
import "./styles.css";

import github from "../../assets/Icons/Github.svg";
import instagram from "../../assets/Icons/Instagram.svg";
import linkedin from "../../assets/Icons/Linkedin.svg";

export default function Contact() {

    return (

        <section id="contact" className="ptf-contact-section">
            <div className="ptf-contact-container">
                <div>
                    <div className='ptf-contact-title'>
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
                        <h1 className="heading">Contato</h1>
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
                    <div className="ptf-contact-form-container">

                        <div className="ptf-card-more-contact">
                            <div className="ptf-more-contact">
                                <div>
                                    <h1> Email para contato</h1>
                                    <h4>contatolucasfernandesbotelho@gmail.com</h4>
                                </div>

                            </div>
                            <div className="ptf-social-card">
                                <div className="ptf-social-card-contact">
                                    <div className="ptf-social-contact">
                                        <img src={instagram} alt="" />
                                        <a href="https://www.instagram.com/lbotelh_"
                                            target="_blank"><h1>@lbotelh_</h1></a>
                                    </div>
                                    <div className="ptf-social-contact">
                                        <img src={linkedin} alt="" />
                                        <a href="https://www.linkedin.com/in/lucas-fernandes-botelho/"
                                            target="_blank"><h1>Lucas Fernandes</h1></a>
                                    </div>

                                    <div className="ptf-social-contact">
                                        <img src={github} alt="" />
                                        <a href="https://github.com/lfernandex"
                                            target="_blank"><h1>lfernande_x</h1></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </section>
    )
}