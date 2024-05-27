import style from './contact.module.css'
import { useTranslation } from 'react-i18next'

function Contact() {
    const { t, i18n } = useTranslation();
    const contactData = t("contact")

    return (
        <div className={style.contactContainer}>
            <h2>{contactData["headeTitle" + i18n.language]}</h2>
            <div className={style.boxContainer}>
                {/*-------mapping contact data*/}
                {contactData[i18n.language].map((elem) => {
                    return (
                        <div className={style.box} key={elem.title}>

                            <h3 className={style.title}>
                                {elem?.title}
                            </h3>
                            {elem.person ? <div className={style.person}>{elem.person}</div> : ''}
                            {elem.Icon?<div><elem.Icon/></div>:''}
                            <div className={style.main}>
                                {elem.text}
                            </div>


                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Contact;