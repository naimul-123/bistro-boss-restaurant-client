import React from 'react';
import { Parallax } from 'react-parallax';

const Cover = ({ info }) => {

    const { bgImg, headerText, desc } = info;
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={bgImg}
            bgImageAlt={headerText}
            strength={-200}
        >

            <div className="hero h-[700px]">
                <div className="hero-content flex-col py-20 px-64 text-center text-neutral-content bg-black bg-opacity-20">
                    <h2 className=" text-5xl font-bold uppercase">{headerText}</h2>
                    <p className="">{desc}</p>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;