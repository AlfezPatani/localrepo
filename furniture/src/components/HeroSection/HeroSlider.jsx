import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import style from './slider.module.css'
import a from '../../assets/images/123861.jpg'
import NavButton from './NavButton';
{/* ------styles-----*/ }
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

//icons 
import {FaSearch} from 'react-icons/fa'


import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom';


function Slider() {
    const { t, i18n } = useTranslation();
    const heroPosters = t("heroPosters");
    return (
        <div className={style.slider}>

            <Swiper
                modules={[Navigation, Pagination, A11y, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
                speed={800}
            >
                {/*------mapping all heroPosters-----*/}
                {
                    heroPosters[i18n.language].map((poster) => {
                        return (
                            <SwiperSlide key={poster.text}>
                                <img src={poster.src} alt="" className={style.images} />
                                <h2 className={style.heroText}>{poster.text}</h2>
                            </SwiperSlide>
                        )
                    })
                }

                <NavButton type={"prevBtn"} iconClass={"fa-solid fa-arrow-left"} />
                <NavButton type={"nextBtn"} iconClass={"fa-solid fa-arrow-right"} />
                <div className={style.searchBox}>
                    <input type='text' placeholder='search for products' disabled />
                    <FaSearch className={style.searchIcon}/>
                    <Link className={style.Upper} to={'search'}></Link>
                </div>
            </Swiper>
        </div>
    );

}
export default Slider