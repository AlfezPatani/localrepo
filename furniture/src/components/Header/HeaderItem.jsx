import style from './Header.module.css'
import {NavLink} from 'react-router-dom'

function HeaderItem({name,faclass,mainclass,isScrollDown,path,isHome,handleSlider}){
    return(
        
        <div className={`${style.headerItem} ${style[mainclass]} `}>
            <NavLink to={path} 
            className={`${isScrollDown?style.fcolor:""}
                        ${isHome===false?style.fcolor:" "}
                        ${style[mainclass]}`}
            onClick={() => handleSlider?handleSlider(false):""}
            >
            <i className={`${faclass} ${style.mlf5}`}></i>

                {name}
            </NavLink>
        </div>
    )
}

export default HeaderItem