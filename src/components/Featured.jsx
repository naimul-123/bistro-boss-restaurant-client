import React from 'react';
import SectionTitle from './SectionTitle';
import feautredImg from '../assets/home/featured.jpg'
import '../components/styles/featuredStyles.css'
const Featured = () => {
    const info = {
        title: "Featured items",
        subTitle: "Check it out"
    }
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle info={info} />
            <div className='md:flex items-center justify-center px-36 py-20 gap-6 bg-slate-500 opacity-60 '>
                <img src={feautredImg} className='md:w-1/2' />
                <div>
                    <p>Aug 20, 2024</p>
                    <p className='uppercase'>Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi aperiam reprehenderit, officia perferendis quibusdam sint. Omnis dolores unde magni inventore.</p>
                    <button className='btn btn-outline border-0 border-b-4'>Order now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;