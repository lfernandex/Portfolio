import "./styles.css"

import icon from "../../assets/Icons/Dev.svg"

import github from "../../assets/Icons/Github.svg"
import instagram from "../../assets/Icons/Instagram.svg"
import linkedin from "../../assets/Icons/Linkedin.svg"


export default function Home() {

    return (
        <>
            <section id="home" className="ptf-home-section">
                <div className="ptf-heigh">
                    <div className="ptf-center">
                        <div className="ptf-organization ptf-ajustation ">
                            <div className="ptf-description">
                                <div className="ptf-details">

                                    <p className="ptf-presentations">
                                        <span className="ptf-name"
                                        >Lucas Fernandes</span>
                                        <br />
                                        <span className="ptf-tech">
                                            Desenvolvedor Back-end.
                                        </span>

                                    </p>

                                    <div className="ptf-icons-social">
                                        <a href="https://www.linkedin.com/in/lucas-fernandes-botelho/"
                                            target="_blank">
                                            <img src={linkedin} alt="" />
                                        </a>

                                        <a href="https://www.github.com/lfernandex"
                                            target="_blank">
                                            <img src={github} alt="" />
                                        </a>



                                        <a href="https://instagram.com/lbotelh_"
                                            target="_blank">
                                            <img src={instagram} alt="" />
                                        </a>

                                    </div>

                                </div>
                                <div className="ptf-social-media">
                                    <img src={icon} alt="" />
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}