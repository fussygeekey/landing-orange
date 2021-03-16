import { useEffect } from 'react'
import style from './MainPage.module.scss'
// AOS
import Aos from 'aos';
import '../../../node_modules/aos/dist/aos.css'
// Components
import Targets from './../Targets/Targets'
import CaseSwiper from './../CaseSwiper/CaseSwiper'
// Video
import mainPreview from './../../video/main-preview.mp4'
// Logo
import logo from './../../images/logo/logo1.svg'


function MainPage() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <main className={style.main} data-aos="fade">
            <header className={style.preview}>
                <div className={style.preview_content}>
                    <img src={logo} className={style.logo} data-aos="fade-down-left" />
                    <h1 className={style.heading}>
                        Разработка продуктов: от лендинга до ERP-системы
                    </h1>
                    <hr className={style.hr} data-aos="zoom-out-down" />
                    <p className={style.paragraph}>
                        Оплата после завершенного этапа &mdash; с минимумом риска.
                    </p>
                    <div className={style.slider}>
                        <div className={style.circle}></div>
                        <hr className={style.guide}/>
                    </div>
                </div>
            </header>
            <section className={style.target_items}>
                <Targets />
            </section>
            <section className={style.cases}>
                <CaseSwiper />
            </section>
        </main>
    );
}



export default MainPage