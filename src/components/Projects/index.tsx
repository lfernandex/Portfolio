import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';



import SwiperProject from '../SwiperProject';
import "./styles.css";


export default function Projects() {
    return (
        <section id='projects' className='ptf-projects-section'>
            <div className="ptf-projects-container">
                <div className='ptf-project-title'>
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
                    <h1 className="heading">Projetos</h1>
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

                <SwiperProject />
               
            </div>
        </section>
    );
}