import React from 'react';
import MenuItem from './MenuItem';
import Cover from './Cover';
import SectionTitle from './SectionTitle';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, info }) => {
	// console.log(info)
	return (
		<div className='pt-8'>
			<Cover info={info}></Cover>
			<SectionTitle info={info}></SectionTitle>
			<div className='grid md:grid-cols-2 gap-4 my-16 '>
				{items?.map((item) => (
					<MenuItem
						key={item._id}
						item={item}
					/>
				))}
			</div>
			<div className='max-w-full mx-auto text-center my-5'>
				<Link
					to={`/order/${info.title}`}
					className='btn btn-outline text-[#1F2937] uppercase border-[#1F2937] border-0 border-b-4'>
					Order now
				</Link>
			</div>
		</div>
	);
};

export default MenuCategory;
