import React, { useEffect } from 'react'
import style from './ModalWindow.module.scss'
// Formik
import { Formik, Form, Field } from 'formik'
// AOS
import Aos from 'aos';
import '../../../node_modules/aos/dist/aos.css'



function ModalWindow() {
    useEffect(() => {
        Aos.init({ duration: 300 });
    }, []);

    return (
        <div data-aos="fade-up" className={style.modal_window}>
            <h3 className={style.heading}>
                Оставить заявку
                </h3>
            <hr className={style.hr} />
            <Formik
                initialValues={{
                    name: "",
                    phone: "",
                    text: ""
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Field
                            name="name"
                            placeholder="Ваше имя"
                            className={style.input_area}
                            type="text"
                        />
                        <Field
                            name="phone"
                            placeholder="Ваш номер телефона"
                            className={style.input_area}
                            type="text"
                        />
                        <textarea
                            name="text"
                            placeholder="Сообщение"
                            className={style.textarea}
                            type="text"></textarea>
                        <button type="submit" disabled={isSubmitting} className={style.button}>
                            Отправить
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}



export default ModalWindow