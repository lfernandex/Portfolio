import "./styles.css";

import comingSonn from "../../assets/Projects/breve.png";
import frontCommerce from "../../assets/Projects/front.png";
import portfolio from "../../assets/Projects/portfolio.png";
import apiCommerce from "../../assets/Projects/rest.png";


import { EffectCoverflow, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function SwiperContent() {

    return (
        <Swiper

            effect={'coverflow'}

            coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
            }}

            grabCursor={true}
            navigation
            centeredSlides={true}
            initialSlide={1}

            slidesPerView={'auto'}
            loop={true}

            modules={[EffectCoverflow, Navigation]}

            className="ptf-swiper-container"
        >
            <SwiperSlide>
                <div className='ptf-project-card'>
                    <div className='ptf-project-icon'>
                        <img src={apiCommerce} />
                    </div>

                    <a href="https://github.com/lfernandex/Commerce"
                        target='_blank'>
                        <div className='ptf-details'>

                            <h1>Commerce API</h1>

                            <p >Este projeto é uma api de um e-commerce, desenvolvida
                                com as ferramentas do Spring, que armazena produtos no
                                banco de dados. </p>

                        </div>
                    </a>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='ptf-project-card'>
                    <div className='ptf-project-icon'>
                        <img src={frontCommerce} />
                    </div>

                    <a href="https://github.com/lfernandex/Commerce-FrontEnd."
                        target='_blank'>
                        <div className='ptf-details'>

                            <h1>E-commerce</h1>

                            <p>Este projeto de um e-commerce, desenvolvida
                                com as ferramentas do React, que consome uma api
                                (commerce api).
                            </p>

                        </div>
                    </a>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='ptf-project-card'>
                    <div className='ptf-project-icon'>
                        <img src={portfolio} />
                    </div>

                    <a href="https://github.com/lfernandex/Portfolio"
                        target='_blank'>
                        <div className='ptf-details'>

                            <h1>Portfólio</h1>

                            <p>Este projeto é sobre um porfólio, criado com as
                                ferramentas do React, para apresentação
                                de habilidades, projetos, curiosidades e contato. </p>

                        </div>
                    </a>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='ptf-project-card'>
                    <div className='ptf-project-icon'>
                        <img src={comingSonn} />
                    </div>

                    <a href="#"
                        target=''>
                        <div className='ptf-details'>

                            <h1>Em breve</h1>

                            <p>Este projeto está em desenvolvimento.
                            </p>

                        </div>
                    </a>
                </div>
            </SwiperSlide>

        </Swiper>
    )
}