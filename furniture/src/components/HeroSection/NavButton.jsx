import { useSwiper } from 'swiper/react';
import '../../App.css'
import { useState,useEffect, useRef } from 'react'; 

function NavButton({ type, iconClass }) {
    let Swiper = useSwiper()
    const [slideIndex, setSlideIndex] = useState(0);
    useEffect(() => {
        
        const slideChangeHandler = () => {
            setSlideIndex(Swiper.realIndex);
        };

        Swiper.on('slideChange', slideChangeHandler);

        return () => {
            Swiper.off('slideChange', slideChangeHandler);
        };
    }, [Swiper]);
    if (Swiper.slides.length <= Swiper.params.slidesPerView) {
        console.log(Swiper.slides.length<=Swiper.params.slidesPerView);
        return null; 
    }

    return (
        <button className={type}
            disabled={(type === 'prevBtn' && Swiper.realIndex===0) || (type === 'nextBtn' && Swiper.realIndex===Swiper.slides.length - 1)}
            onClick={() => {
                type == "prevBtn" ? Swiper.slidePrev() : Swiper.slideNext()
            }}>
            <i className={iconClass}></i>
        </button>
    )
}

export default NavButton