import React, { useEffect } from 'react';
import SectionTitle from './SectionTitle';
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';
import { Rating, ThinStar } from '@smastrom/react-rating';

const Testimonials = () => {

    const [reviews, setReviews] = useState();

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(err => console.log(err.message))
    }, [])

    const info = {
        title: "Order Online",
        subTitle: "From 11am to 10.00pm"
    }
    return (
        <section>
            <SectionTitle info={info} />

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {reviews?.map((review) =>
                    <SwiperSlide key={review._id}>
                        <div className='max-w-screen-lg mx-auto text-center flex-col flex items-center'>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly



                            />
                            <p>{review.details}</p>
                            <h3 className='text-yellow-400 text-3xl'>{review.name}</h3>
                        </div>
                    </SwiperSlide>)}
            </Swiper>
        </section>
    );
};

export default Testimonials;