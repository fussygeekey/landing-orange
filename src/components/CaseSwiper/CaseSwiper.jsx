import { useState, useEffect } from 'react'
// Style
import style from './CaseSwiper.module.scss'
// RRD
import { Link } from 'react-router-dom'
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.scss'
// Logo
import PANHLogo from './../../images/content/PANH-logo.svg'
import handLogo from './../../images/content/hand-logo.svg'
import furnitureLogo from './../../images/content/mebel-style-logo.svg'
// Images
import PANHImg from './../../images/content/PANH-preview.jpg'
import handImg from './../../images/content/hand-preview.png'
import furnitureImg from './../../images/content/furniture-preview.png'



function Case(props) {
    return (
        <Link to={props.to} className={style.case_link}>
            <div className={style.case} to={props.to}>
                <div className={style.preview}>
                    <img className={style.preview_logo} src={props.logoPath} />
                    <img className={style.preview_image} src={props.imgPath} />
                </div>
                <div className={style.content}>
                    <h3 className={style.heading}>
                        {props.heading}
                    </h3>
                    <hr className={style.hr} />
                    <p className={style.paragraph}>
                        {props.children}
                    </p>
                </div>
            </div>
        </Link>
    );
}

function CaseSwiper() {
    let isSmall = window.screen.width <= 300
    let isMedium = window.screen.width <= 375 && window.screen.width > 300
    let isLarge = window.screen.width >= 375 && window.screen.width < 768

    return (
        <Swiper
            spaceBetween={20}
            slidesPerView="auto"
            centeredSlides
            loop
        >
            <SwiperSlide style={{ width: 300 }}>
                <Case heading="Panh Helicopters" logoPath={PANHLogo} imgPath={PANHImg} to="/case1">
                    Научно-производственная компания «ПАНХ» (PANH Helicopters) образована в 1964 году и в настоящее время является одной из наиболее динамично развивающихся авиационных компаний России.
                </Case>
            </SwiperSlide>
            <SwiperSlide style={{ width: 300 }}>
                <Case heading="В надежных руках" logoPath={handLogo} imgPath={handImg} to="/case2">
                    Сайт медицинского центра с широким функционалом, целью которого является получение качественных медицинских услуг в г. Краснодаре.
                </Case>
            </SwiperSlide>
            <SwiperSlide style={{ width: 300 }}>
                <Case heading="МебельСтиль" logoPath={furnitureLogo} imgPath={furnitureImg} to="/case3">
                    Компания «МебельСтиль» — один из самых крупных производителей и поставщиков офисной мебели в России.
                </Case>
            </SwiperSlide>
        </Swiper>
    );
}



export default CaseSwiper