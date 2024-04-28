import style from './contact.module.css'
import { useTranslation } from 'react-i18next'

function Contact() {
    const { t, i18n } = useTranslation();
    const contactData = t("contact")

    return (
        <div className={style.contactContainer}>
            <h2>{contactData["headeTitle"+i18n.language]}</h2>
            <div className={style.boxContainer}>
                {/*-------mapping contact data*/}
                {contactData[i18n.language].map((elem) => {
                    return (
                        <div className={style.box} key={elem.title}>
                            
                            <div className={style.icon}>
                                <i className="fa-solid fa-location-dot"></i>
                            </div>
                            <div>
                            <h3 className={style.title}>
                                {elem?.title}
                            </h3>
                            <div className={style.main}>
                                
                                {elem.detail.map((data) => {
                                    return (
                                        <div key={Math.random()*Math.random()}>
                                             <p className={style?.line1}>{data?.line1}</p>
                                             <p className={style.line2}>{data?.line2}</p>
                                        </div>
                                    )
                                } )}
                                
                            </div>
                            </div>

                        </div>
                    )
                })}
                {/* <div className={style.box}>

                    <div className={style.icon}>
                        <i className="fa-solid fa-phone"></i>
                    </div>
                    <h3 className={style.title}>
                        Phone
                    </h3>
                    <div className={style.main}>
                        <p className={style.line1}>kothariya solvent rajkot</p>
                        <p className={style.line2}>street no. 108 ,12gr</p>
                    </div>

                </div>
                <div className={style.box}>

                    <div className={style.icon}>
                        <i className="fa-regular fa-envelope"></i>
                    </div>
                    <h3 className={style.title}>
                        Email
                    </h3>
                    <div className={style.main}>
                        <p className={style.line1}>kothariya solvent rajkot</p>
                        <p className={style.line2}>street no. 108 ,12gr</p>
                    </div>

                </div> */}
            </div>
        </div>
    )
}

export default Contact;