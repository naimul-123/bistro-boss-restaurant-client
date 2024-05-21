import React from 'react';

const SectionTitle = ({ info }) => {
    const { title, subTitle } = info
    return (
        <div className='max-w-sm mx-auto text-center space-y-2 my-8'>
            <p className='text-[#D99904]'>---{subTitle}---</p>
            <h2 className='text-3xl font-bold uppercase border-y-4 py-4'>{title}</h2>
        </div>
    );
};

export default SectionTitle;