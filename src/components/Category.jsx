import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import './styles/swiperStyles.css'


// import required modules
import { Pagination } from 'swiper/modules';
import slide1 from '../assets/home/slide1.jpg'
import slide2 from '../assets/home/slide2.jpg'
import slide3 from '../assets/home/slide3.jpg'
import slide4 from '../assets/home/slide4.jpg'
import slide5 from '../assets/home/slide5.jpg'
import SectionTitle from './SectionTitle';

const Category = () => {
    const info = {
        title: "Order Online",
        subTitle: "From 11am to 10.00pm"
    }
    return (
        <section>
            <SectionTitle info={info} />
            <Swiper
                slidesPerView={4}
                centeredSlides={true}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide>
                    <img src={slide1} />
                    <h3 className='text-4xl uppercase text-center absolute bottom-5 left-1/4'>Salad</h3>

                </SwiperSlide>
                <SwiperSlide><img src={slide2} />
                    <h3 className='text-4xl uppercase text-center absolute bottom-5 left-1/4'>Pizzas</h3>

                </SwiperSlide>
                <SwiperSlide><img src={slide3} />
                    <h3 className='text-4xl uppercase text-center absolute bottom-5 left-1/4'>Soups</h3>

                </SwiperSlide>
                <SwiperSlide><img src={slide4} />
                    <h3 className='text-4xl uppercase text-center absolute bottom-5 left-1/4'>Sesserts</h3>

                </SwiperSlide>
                <SwiperSlide><img src={slide5} />
                    <h3 className='text-4xl uppercase text-center absolute bottom-5 left-1/4'>Salad</h3>

                </SwiperSlide>

            </Swiper>
        </section>
    );
};

export default Category;