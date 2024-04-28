import style from './style.module.css';
import { useTranslation } from 'react-i18next'

function BusinessVertical() {
    const { t, i18n } = useTranslation();
    const bussinessVerticalData = t("bussinessVertical");
    

    return (
       <div>
         <h2 className={style.heading}>{bussinessVerticalData["headeTitle"+i18n.language]}</h2>
         <div className={style.Container}>
            {bussinessVerticalData[i18n.language].map((bv) => {
                return (
                    <div className={style.colunm}>
                        <bv.Icon className={style.icon} />
                        <p className={style.text}>{bv.text}</p>
                    </div>
                )
            })}
        </div>
       </div>
    )
}

export default BusinessVertical;