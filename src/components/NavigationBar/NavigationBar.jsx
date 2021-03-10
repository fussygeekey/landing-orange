import React, { useState, useEffect } from 'react'
import style from './NavigationBar.module.scss'
// AOS
import Aos from 'aos';
import '../../../node_modules/aos/dist/aos.css'
// RRD
import { Link, withRouter } from 'react-router-dom'
// Modal window
import ModalWindow from './../ModalWindow/ModalWindow'
// Icons
import homeIcon from './../../images/icons/home-icon.svg'
import caseIcon from './../../images/icons/case-icon.svg'
import phoneIcon from './../../images/icons/mobile-phone-icon.svg'
import activePhoneIcon from './../../images/icons/active-phone-icon.svg'



function NavigationBar() {
    const [modalIsVisible, handleModal] = useState(false)
    const showModal = () => {
        handleModal(!modalIsVisible)
        document.body.style.overflow = (modalIsVisible ? "visible" : "hidden")
    }

    const [changedIcon, handleChange] = useState(phoneIcon)

    useEffect(() => {
        Aos.init({ duration: 300 })

        if (window.location.pathname !== "/" && window.location.pathname !== "/about") {
            handleChange(activePhoneIcon)
        }
        else {
            handleChange(phoneIcon)
        }
    });

    return (
        <React.Fragment>
            {modalIsVisible &&
                <React.Fragment>
                    <ModalWindow />
                    <div data-aos="fade" className={style.background} onClick={showModal}></div>
                </React.Fragment>
            }
            <nav className={style.nav_bar}>
                <ul className={style.nav_links}>
                    <li>
                        <Link className={style.link_button} to="/">
                            <img src={homeIcon} />
                        </Link>
                    </li>
                    <li>
                        <Link className={style.link_button} to="/about">
                            <img src={caseIcon} />
                        </Link>
                    </li>
                </ul>
                <button className={style.send_application} onClick={showModal}>
                    <img src={changedIcon} />
                </button>
            </nav>
        </React.Fragment>
    );
}



export default withRouter(NavigationBar)