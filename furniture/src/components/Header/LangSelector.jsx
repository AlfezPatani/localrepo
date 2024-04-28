import { useState } from 'react'
import style from './Header.module.css'
import { langList } from '../index'
import { useTranslation } from 'react-i18next'

function LangSelector({fcolor,isNull,className}) {

    const [visblity, setVisiblity] = useState("hide")
    const { i18n } = useTranslation()

    return (
        <div className={`${style.lang} ${style[fcolor]} ${className?style[className]:""}`}
            onMouseEnter={() => setVisiblity("show")}
            onMouseLeave={() => setVisiblity("hide")}
        >
            <div className={`${style.headerItem} `}>
                <i className='fa-solid fa-globe'></i>
                <p>{isNull?"":"Language"}</p>
            </div>
            <div className={`${style[visblity]} ${style.langItem}`}>
                <ul>
                    {langList.map((item) => {
                        return <li
                            className={i18n.language == item.code ? style.langItemSlected : ""}
                            key={item.code}
                            onClick={() => i18n.changeLanguage(item.code)}
                        >
                            {item.lang}
                        </li>
                    })}
                </ul>
            </div>
        </div>
    )

}

export default LangSelector