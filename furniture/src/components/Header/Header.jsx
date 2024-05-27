import { useTranslation } from 'react-i18next'
import style from './Header.module.css'
import HeaderItem from './HeaderItem'
import LangSelector from './LangSelector'
import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'


function Header() {

    {/*---hooks----*/ }
    const location = useLocation();
    console.log(location);
    const { t } = useTranslation()
    const headerLinks = t("header")
    const [isScrollDown, setIsScrollDwon] = useState(false)
    const [isSliderVisible, setIsSliderVisible] = useState(false)



    const handleSliderChange = (val) => {
        setIsSliderVisible(val)

    }
    useEffect(() => {
        const handleWindowScroll = () => {
            let scorlly = window.scrollY;
            let viewportHeight = window.innerHeight;
            const scrolledInVh = (scorlly / viewportHeight) * 100;
            if (scrolledInVh > 67) {
                setIsScrollDwon(true);
            } else {
                setIsScrollDwon(false);
            }
        };
        if (location.pathname === "/") {
            window.addEventListener("scroll", handleWindowScroll);
        }
        return () => {

            window.removeEventListener("scroll", handleWindowScroll);
        };
    }, [location]);



    return (
        <div className={`${style.header} ${isScrollDown || location.pathname !== "/" ? style.bg1 : ""}`}>
            {/*for mobiles*/}
                <div className={style.itemContainer}>
                    {/*search btn*/}
                    {/* <NavLink to="/search" className={style.bar}>
                        <i className={`fa-solid fa-magnifying-glass ${isScrollDown || location.pathname !== "/" ? style.fcolor : ""}`}></i>
                    </NavLink> */}
                    {/*hamburger button*/}
                    <div className={style.bar}>
                        <i
                            className="fa-solid fa-bars"
                            onClick={() => handleSliderChange(true)}
                        ></i>
                    </div>
                    {/*logo*/}
                    <div className={style.logo}>
                        <span>narayanhari</span>
                       {location.pathname==='/search'? <p className={style.slogan}>Build Quality</p>:''}
                    </div>
                    <LangSelector fcolor="" className={"bar"} isNull={true}/>
                    
                </div>
            {/*genral navbar items*/}
            <div className={style.headerItemCollaction}>
                {headerLinks.map((elem) => <HeaderItem key={elem.item} name={elem.item} faclass={"fa-solid fa-house"} isScrollDown={isScrollDown} path={elem.path} isHome={location.pathname === "/"} />)}
                <div className={style.searchIcon}>
                    <NavLink to="/search">
                        <i className={`fa-solid fa-magnifying-glass ${isScrollDown || location.pathname !== "/" ? style.fcolor : ""}`}></i>
                    </NavLink>
                </div>
                <LangSelector isNull={true} />

            </div>
           
            {/*--side bar*/}
            <div
                className={`${style.fullContainer} ${isSliderVisible ? style.show : style.hide}`}
            >
                <div className={style.sidebar}>
                    <div
                        className={style.closebtn}
                        onClick={() => handleSliderChange(false)}
                    >
                        <i className="fa-solid fa-xmark"></i>
                    </div>
                    
                    {headerLinks.map((elem) => <HeaderItem key={elem.item} name={elem.item} faclass={"fa-solid fa-house"} mainclass={"fcolor"} isScrollDown={isScrollDown} path={elem.path} handleSlider={handleSliderChange} />)}
                    
                </div>
            </div>

        </div>
    )
}

export default Header