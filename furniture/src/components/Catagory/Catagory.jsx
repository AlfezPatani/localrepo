import React, { useRef, useState } from 'react';
import i1 from '../../assets/images/123862.jpg'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { NavButton } from '../index'
import { useTranslation } from 'react-i18next'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import style from './catagory.module.css'
import { NavLink } from 'react-router-dom';

// import required modules
import { Keyboard, Pagination, Navigation,Autoplay} from 'swiper/modules';



function Catagory() {
    const { t, i18n } = useTranslation()
    const data = t("allPhotos")

    return (
        <div className={style.collaction}>
            {data.map((ele) => {
                return (
                    <div key={new Date().getDate() + Math.random()} className={style.container}>
                        <h2 className={style.title}>{ele[i18n.language]}</h2>
                        <Swiper
                            modules={[Keyboard, Pagination, Navigation,Autoplay]}
                            // navigation={true}
                            slidesPerView={1}
                            spaceBetween={10}
                            loop={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false
                            }}
                            keyboard={{
                                enabled: true,
                            }}
                            pagination={
                                {
                                    clickable: true
                                }
                            }
                            breakpoints={{
                                428: {
                                    slidesPerView: 1.5,
                                },
                                576: {
                                    slidesPerView: 2.5,
                                },
                                768: {
                                    slidesPerView: 3,
                                },
                                991: {
                                    slidesPerView: 3.6,
                                },
                                1024: {
                                    slidesPerView: 4,
                                },
                                1280: {
                                    slidesPerView: 5,
                                }
                            }}

                            className="mySwiper"
                        >

                            {ele?.detail.map((image, index) => {
                                return (
                                    index <= 5 ? <SwiperSlide key={image + Math.random()} className={style.card}>
                                        <img src={image} />
                                    </SwiperSlide> : ""
                                )
                            })}

                            <NavButton type={"prevBtn"} iconClass={"fa-solid fa-arrow-left"} />
                            <NavButton type={"nextBtn"} iconClass={"fa-solid fa-arrow-right"} />

                        </Swiper>

                        <NavLink to={`/product/${ele.key}`} className={style.link}>
                            see more<i className='fa-solid fa-circle-arrow-right'></i>
                        </NavLink>

                    </div>
                )
            })}

        </div>
    );
}

export default Catagory
