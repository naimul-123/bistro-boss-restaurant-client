import React from 'react';

const MenuItem = ({ item }) => {
    // console.log(item)
    const { name, image, price, recipe } = item;
    return (
        <div className='flex gap-2'>
            <img src={image} className='w-24 h-24 rounded-r-full rounded-bl-full' />
            <div>
                <h3 className='upercase'>{name}---------------</h3>
                <p>{recipe}</p>
            </div>
            <p className='text-[#D99904]'>${price}</p>
        </div>
    );
};

export default MenuItem;