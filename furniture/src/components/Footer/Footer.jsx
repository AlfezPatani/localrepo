import style from './footer.module.css'
import { useTranslation } from 'react-i18next'
function Footer(){
        const {t}=useTranslation()
        const footerData=t('footer')
        

    return(
        <footer>
            <h2>{footerData.headline}</h2>
            <div className={style.social}>
                <a href='#'><i className="fa-brands fa-instagram"></i></a>
                <a href='#'><i className="fa-brands fa-facebook"></i></a>
            </div>
            <p>{footerData.copyright}</p>
        </footer>
    )
}

export default Footer