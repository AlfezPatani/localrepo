import style from './footer.module.css'
import { useTranslation } from 'react-i18next'
import { IoLogoWhatsapp } from "react-icons/io";
import { FaSquarePhone } from "react-icons/fa6";
function Footer() {
    const { t } = useTranslation()
    const footerData = t('footer');
    const phoneNumber = "8160221309";
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    const handleWAClick = () => {
        window.open(whatsappUrl, '_blank');
    }
    const handlePhoneClick = () => {
           
    }

    return (
        <>
            <article className={style.special}>
                51 + Year Work Experience
            </article>
            <article className={style.special}>
                11000 + Happy Customer
            </article>
            <footer>
                <h2>{footerData.headline}</h2>
                <div className={style.social}>
                    <div
                        className="WA"
                        onClick={handleWAClick}
                    >
                        <IoLogoWhatsapp />
                    </div>
                    <div
                        className="Contact"
                        onClick={handlePhoneClick}
                    >
                        <FaSquarePhone />
                    </div>
                </div>
                <p>{footerData.copyright}</p>
            </footer>
        </>
    )
}

export default Footer