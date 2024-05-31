import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/SectionTitle';
import { useForm } from 'react-hook-form';
import { FaUtensils } from 'react-icons/fa6';
import Swal from 'sweetalert2';
import { useLoaderData } from 'react-router-dom';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useAxiosPublic from '../../hooks/useAxiosPublic';



const UpdateItem = () => {
    const { name, image, recipe, price, category, _id } = useLoaderData();
    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();
    const info = {
        title: "update an Item",

    }

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm()
    const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

    const onSubmit = async (data) => {

        let updatedImage;


        // console.log(data.image[0]);
        if (data.image[0]) {
            const imageFile = { image: data.image[0] }
            const res = await axiosPublic.post(image_hosting_api, imageFile, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });
            updatedImage = res.data.data.display_url
        }
        else {
            updatedImage = image
        }

        // console.log(res.data);

        const menuItem = {
            name: data.name,
            category: data.category,
            price: parseFloat(data.price),
            recipe: data.recipe,
            image: updatedImage

        }

        const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem)

        if (menuRes.data.modifiedCount) {
            Swal.fire({

                icon: "success",
                title: "Item has been updated successfully",
                showConfirmButton: false,
                timer: 1500
            });
            reset()
        }


    }


    // if (isPending) {
    //     return
    // }

    return (
        <div>
            <SectionTitle info={info} ></SectionTitle>
            <form className='bg-[#F3F3F3] max-w-screen-md mx-auto p-12 grid grid-cols-1 gap-6 md:grid-cols-2' onSubmit={handleSubmit(onSubmit)}>

                <label className="form-control w-full md:col-span-full">
                    <div className="label">
                        <span className="label-text">Recipe name <em className='text-red-600'>*</em></span>
                    </div>
                    <input type="text" defaultValue={name} placeholder="Recipe name"{...register('name', { required: "Name is required!" })} className="input input-bordered w-full " />
                    {errors.name && <p className='text-red-600'> {errors.name.message}</p>}
                </label>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Category <em className='text-red-600'>*</em></span>
                    </div>
                    <select defaultValue={category} {...register('category', { required: "Category is required!" })} className="select select-bordered w-full">
                        <option value="" disabled>Category</option>
                        <option value="dessert">Dessert</option>
                        <option value="drinks">Drinks</option>
                        <option value="soup">Soup</option>
                        <option value="salad">Salad</option>
                        <option value="pizza">Pizza</option>
                        <option value="offered">Offered</option>
                        <option value="popular">Popular</option>
                    </select>
                    {errors.category && <p className='text-red-600'> {errors.category.message}</p>}
                </label>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Price <em className='text-red-600'>*</em></span>
                    </div>
                    <input type="number" defaultValue={price} placeholder="Price"{...register('price', { required: "Price is required!" })} className="input input-bordered w-full" />
                    {errors.price && <p className='text-red-600'> {errors.price.message}</p>}
                </label>
                <label className="form-control w-full md:col-span-full">
                    <div className="label">
                        <span className="label-text">Recipe Details <em className='text-red-600'>*</em></span>
                    </div>
                    <textarea defaultValue={recipe} className="textarea textarea-lg textarea-bordered" placeholder="Recipe Details" {...register('recipe', { required: "Recipe is required!" })}></textarea>
                    {errors.recipe && <p className='text-red-600'> {errors.recipe.message}</p>}
                </label>

                <label className="form-control w-full md:col-span-full">
                    <input type="file" {...register('image')} className="file-input bg-[#F7F7F7]  file-input-bordered w-full max-w-xs" />
                    {errors.image && <p className='text-red-600'> {errors.image.message}</p>}
                </label>



                <button className="btn bg-gradient-to-r from-[#835D23] to-[#B58130] text-white mx-auto max-w-xs w-full md:col-span-full" >Update Menu Item</button>



            </form>
        </div>
    );
};

export default UpdateItem;