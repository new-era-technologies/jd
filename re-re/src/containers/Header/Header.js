import Item from '../../components/Header/Item';
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { header_slider } from '../../utils/configs/header/header-slider';

import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import './Header.scss';

// install Swiper modules
SwiperCore.use([Pagination]);

function Header() {
    const listItems = header_slider.map((item, i) => (
        <SwiperSlide>
            <Item value={item} key={i} />
        </SwiperSlide>
    ));
    return (
        <header className="header">
             <div className="container">
                <h3 className="header__title">Why our Directory</h3>
                <Swiper
                    spaceBetween={25}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                >
                    {listItems}
                </Swiper>
            </div>
        </header>
    );
}

export default Header;