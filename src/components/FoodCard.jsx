import React from 'react';

const FoodCard = ({ item }) => {
    const { name, image, price, recipe } = item;
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
                <figure><img src={image} alt={name} className='w-full' /></figure>
                <p className='bg-slate-900 text-white absolute mr-4 mt-4 right-0 p-2'>${price}</p>
                <div className="card-body items-center text-center ">

                    <h2 className="card-title">{name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                        <button className="btn btn-outline bg-[#E8E8E8] text-[#BB8506] border-[#BB8506] uppercase hover:text-[#BB8506] border-0 border-b-4">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;