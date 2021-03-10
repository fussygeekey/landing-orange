import { useEffect } from 'react'
import style from './AboutUsPage.module.scss'
// RRD
import { withRouter } from 'react-router-dom'
// AOS
import Aos from 'aos';
import '../../../node_modules/aos/dist/aos.css'
// Icons
import locationIcon from './../../images/icons/location-icon.svg'
import phoneIcon from './../../images/icons/phone-icon.svg'
import mailIcon from './../../images/icons/mail-icon.svg'
import instagramIcon from './../../images/icons/instagram-icon.svg'
import tiktokIcon from './../../images/icons/tiktok-icon.svg'
import facebookIcon from './../../images/icons/facebook-icon.svg'
import telegramIcon from './../../images/icons/telegram-icon.svg'
import vkIcon from './../../images/icons/vk-icon.svg'
// Images
import notebookItem from './../../images/content/notebook-item.png'
import copywritingItem from './../../images/content/copywriting-item.png'
import cameraItem from './../../images/content/camera-item.png'
import mechItem from './../../images/content/mech-item.png'
import megaphoneItem from './../../images/content/megaphone-item.png'
import tableItem from './../../images/content/table-item.png'
import loupeItem from './../../images/content/loupe-item.png'
// Logo
import logo from './../../images/logo/logo2.svg'



function ServicesItem(props) {
    return (
        <li className={style.services_item}>
            <div className={style.item_preview}>
                <img src={props.imgPath} />
            </div>
            <div className={style.item_content}>
                <h3 className={style.heading}>
                    {props.heading}
                </h3>
                <p className={style.item_paragraph}>
                    {props.children}
                </p>
            </div>
        </li>
    );
}

function ContactItem(props) {
    return (
        <li className={style.contact_item}>
            <img src={props.imgPath} />
            <a className={style.item_link} href={props.href} target={props.target}>
                {props.children}
            </a>
        </li>
    );
}

function SocialLink(props) {
    return (
        <li className={style.social_link}>
            <a href={props.href} target="_blank">
                <img src={props.imgPath} />
            </a>
        </li>
    );
}

function AboutUsPage(props) {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <main className={style.main} data-aos="fade">
            <button className={style.go_back} onClick={() => props.history.goBack()}>Назад</button>
            <img className={style.logo} src={logo} data-aos="fade-up-right"/>
            <section className={style.about_us}>
                <div className={style.content_item}>
                    <h2 className={style.heading}>
                        О нас
                    </h2>
                    <hr className={style.hr} data-aos="zoom-in-up"/>
                    <p className={style.paragraph}>
                        Мы предоставляем качественные услуги, чтобы Интернет стал лучше для всех: для пользователей, для предпринимателей и для нас самих.
                    </p>
                </div>
            </section>
            <section className={style.services}>
                <h2 className={style.heading}>
                    Превращаем интернет в источник прибыли
                </h2>
                <hr className={style.hr} />
                <ul className={style.services_container}>
                    <ServicesItem imgPath={notebookItem} heading="Разработка сайтов">
                        Создаём сайты, которые работают на коммерческие задачи.
                    </ServicesItem>
                    <ServicesItem imgPath={copywritingItem} heading="Копирайтинг">
                        Пишем и редактируем коммерческие тексты
                    </ServicesItem>
                    <ServicesItem imgPath={cameraItem} heading="Услуги фотографа и видеографа">
                        Создаём фото и видео, которые запоминаются и вызывают эмоции.
                    </ServicesItem>
                    <ServicesItem imgPath={mechItem} heading="Техническая поддержка сайта">
                        Обслуживаем сайты, чтобы они работали бесперебойно
                    </ServicesItem>
                    <ServicesItem imgPath={megaphoneItem} heading="ADS">
                        Настраиваем контекстную рекламу так, чтобы она работала
                    </ServicesItem>
                    <ServicesItem imgPath={tableItem} heading="SMM">
                        Ведём социальные сети компаний
                    </ServicesItem>
                    <ServicesItem imgPath={loupeItem} heading="SEO">
                        Делаем так, чтобы Яндекс и Гугл повышали позицию сайта в поисковой выдаче
                    </ServicesItem>
                </ul>
            </section>
            <section className={style.contacts_section}>
                <div className={style.contacts_container}>
                    <h2 className={style.heading}>
                        Контакты
                    </h2>
                    <hr className={style.hr} />
                    <ul className={style.contacts}>
                        <ContactItem href="https://goo.gl/maps/TWtqUmJNLEULADax8" imgPath={locationIcon} target="_blank">
                            г.Краснодар, ул.Старокубанская 92, оф.205
                        </ContactItem>
                        <ContactItem href="tel:+79002830333" imgPath={phoneIcon}>
                            +7 (900) 283-03-33
                        </ContactItem>
                        <ContactItem href="mailto:team@orange-marketing.ru" imgPath={mailIcon}>
                            team@orange-marketing.ru
                        </ContactItem>
                    </ul>
                    <ul className={style.links_container}>
                        <SocialLink href="https://instagram.com/orange.marketing?igshid=1dp90oh41ovnh" imgPath={instagramIcon} />
                        <SocialLink href="https://vm.tiktok.com/ZSJd7r63e/" imgPath={tiktokIcon} />
                        <SocialLink href="https://facebook.com/orangemarketing.krd" imgPath={facebookIcon} />
                        <SocialLink href="https://instagram.com/production_orange?igshid=1epxoiawg32h5" imgPath={instagramIcon} />
                        <SocialLink href="https://t.me/orangedm" imgPath={telegramIcon} />
                        <SocialLink href="https://vk.com/orangemarketing" imgPath={vkIcon} />
                        <SocialLink href="https://instagram.com/orangedm.junior/?igshid=l3rrludbqgnq" imgPath={instagramIcon} />
                    </ul>
                </div>
            </section>
        </main>
    );
}



export default withRouter(AboutUsPage)