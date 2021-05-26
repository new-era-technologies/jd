import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

//Import config
import { header_slider } from '../../utils/configs/header/header-slider';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

// install Swiper modules
SwiperCore.use([Pagination]);

function Header() {
    return (
        <header className="header">
             <div className="container">
                <h3 className="header__title">Why our Directory</h3>
                <Swiper
                    spaceBetween={25}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    className="header__slider header-slider"
                >
                    {header_slider.map((item, i) => (
                            <SwiperSlide className="header-slider__slide header-slide" key={i}>
                                <img className="header-slide__img" src={item.img} alt="slider-img" />
                                <h6 className="header-slide__title">{item.title}</h6>
                                <p className="header-slide__text">{item.text}</p>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </header>
    );
}

export default Header;