import { useEffect } from 'react'
import style from './Case.module.scss'
// RRD
import { withRouter } from 'react-router-dom'
// AOS
import Aos from 'aos';
import '../../../node_modules/aos/dist/aos.css'
// Swiper
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.scss'
import 'swiper/components/pagination/pagination.scss';
// GIF
import notebook from './../../gif/notebook.gif'

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);



function Targets(props) {
    let targets = [];

    for (let i in props.targets) {
        targets.push(
            <li>
                {props.targets[i]}
            </li>
        );
    }

    return (
        <ul className={style.target_list}>
            {targets}
        </ul>
    );
}

function SwipeContainer(props) {
    let items = [];

    for (let i in props.slides) {
        items.push(
            <SwiperSlide style={{ marginLeft: 16 }}>
                <img src={props.slides[i]}/>
            </SwiperSlide>
        );
    }

    items.push(<SwiperSlide></SwiperSlide>);

    return (
        <Swiper
            className={style.swiper}
            spaceBetween={250}
            slidesPerView={2}
        >
            {items}
        </Swiper>
    );
}

function ColorPoint(props) {
    return (
        <div className={style.color} style={{ backgroundColor: props.color }}>
            <p>
                <b>RGB</b><br />
                {props.color}
            </p>
        </div>
    );
}

function ImagesSwiper(props) {
    let items = [];

    for (let i in props.images) {
        items.push(
            <SwiperSlide>
                <div
                    className={style.slide_block}
                    style={{
                        backgroundImage: `url(${props.images[i]})`,
                        height: props.height,
                        backgroundPosition: props.position
                    }}></div>
            </SwiperSlide>
        );
    }

    return (
        <Swiper
            className={style.image_swiper}
            pagination={{ clickable: true }}
            spaceBetween={0}
            slidesPerView={1}
        >
            {items}
        </Swiper>
    );
}

function Case(props) {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <main className={style.main} data-aos="fade">
            <header className={style.preview} style={{ backgroundImage: props.case.previewImage }}>
                <button className={style.go_back} onClick={() => props.history.goBack()}>??????????</button>
                <div className={style.preview_content}>
                    <h1 className={style.preview_heading}>
                        {props.case.heading}
                    </h1>
                    <hr className={style.preview_hr} />
                    <a className={style.preview_link} href={props.case.linkToOrigin} target="_blank">
                        {props.case.originLink}
                    </a>
                    <div className={style.slider}>
                        <div className={style.circle}></div>
                        <hr className={style.guide} />
                    </div>
                </div>
            </header>

            <div className={style.datas}>
                <p className={style.datas_p}>
                    <b>????????????: </b>{props.case.city}
                </p>
                <p className={style.datas_p}>
                    <b>???????? ????????????????????: </b>{props.case.dateOfPublication}
                </p>
            </div>

            <section className={style.block}>
                <div className={style.container}>
                    <h2 className={style.heading}>
                        ???????? ?? ???????????? ??????????????
                    </h2>
                    <hr className={style.hr} />
                    <Targets targets={props.case.targets} />
                </div>
            </section>

            <div className={style.interblock_heading}>
                <h2 className={style.first_interblock_heading}>
                    ??????????????
                </h2>
                <h2 className={style.second_interblock_heading}>
                    ????????????????
                </h2>
            </div>

            <section className={style.block}>
                <div className={style.container}>
                    <h2 className={style.heading}>
                        ????????????????????????????????
                    </h2>
                    <hr className={style.hr} />
                    <p>
                        {props.case.prototypesText1}
                    </p>
                </div>
                <SwipeContainer slides={props.case.slides} />
                <div className={style.container}>
                    <p style={{ marginBottom: 10 }}>
                        {props.case.prototypesText2}
                    </p>
                    <p>
                        {props.case.prototypesText3}
                    </p>
                </div>
            </section>

            <section className={style.block}>
                <div className={style.container} style={{ paddingBottom: 10 }}>
                    <h2 className={style.heading}>
                        ?????????????????????? ??????????
                    </h2>
                    <hr className={style.hr} />
                    <h3 className={style.under_heading}>
                        ??????????????
                    </h3>
                    <ul className={style.colors}>
                        <li>
                            <ColorPoint color={props.case.firstColor} />
                        </li>
                        <li>
                            <ColorPoint color={props.case.secondColor} />
                        </li>
                        <li>
                            <ColorPoint color={props.case.thirdColor} />
                        </li>
                    </ul>
                    <h3 className={style.under_heading}>
                        ????????????
                    </h3>
                    <ul className={style.fonts_examples}>
                        <li style={{
                            fontFamily: props.case.firstFontExample
                        }}>
                            <h3 style={{
                                // Style
                                fontSize: 32,
                                lineHeight: 1
                            }}>
                                Aa
                        </h3>
                            <p>
                                {props.case.firstFontExample}
                            </p>
                        </li>
                        <li style={{
                            fontFamily: props.case.secondFontExample
                        }}>
                            <h3 style={{
                                fontSize: 32,
                                lineHeight: 1
                            }}>
                                Aa
                        </h3>
                            <p>
                                {props.case.secondFontExample}
                            </p>
                        </li>
                    </ul>
                </div>
                <ImagesSwiper
                    height={200}
                    images={props.case.images}
                    position="bottom"
                />
            </section>

            <section className={style.block}>
                <div className={style.container} style={{ paddingBottom: 10 }}>
                    <h2 className={style.heading}>
                        ???????????????????? ????????????
                    </h2>
                    <hr className={style.hr} />
                    <p>
                        {props.case.designText}
                    </p>
                </div>
                <ImagesSwiper
                    height={250}
                    images={props.case.designImages}
                    position="center"
                />
            </section>

            <section className={style.block}>
                <div className={style.container}>
                    <h2 className={style.heading}>
                        ?????????????? ?? ???????????? ??????????????
                    </h2>
                    <hr className={style.hr} />
                    <div className={style.image_block}>
                        <img src={notebook} className={style.block_image} />
                    </div>
                    <p>
                        {props.case.buildText}
                    </p>
                </div>
            </section>

            <footer className={style.block}>
                <div className={style.container}>
                    <p>
                        {props.case.tech}
                    </p>
                    <p>
                        {props.case.feature}
                    </p>
                    <p><b>{props.case.hours}</b> ??????????????</p>
                    <p><b>{props.case.humansValue} ??????????????</b> ?? ??????????????</p>
                </div>
            </footer>
        </main>
    );
}



export default withRouter(Case)