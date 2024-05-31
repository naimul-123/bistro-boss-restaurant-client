import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import { useForm } from 'react-hook-form';
import { FaUtensils } from 'react-icons/fa6';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import axios from 'axios';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const AddItems = () => {

    const info = {
        title: "add an Item",
        subTitle: "What's New?"
    }

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm()
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
        // console.log(data.image[0]);
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        // console.log(res.data);
        if (res.data.success) {
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url

            }

            const menuRes = await axiosSecure.post('/menu', menuItem)

            if (menuRes.data.insertedId) {
                Swal.fire({

                    icon: "success",
                    title: "Item has been saved successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                reset()
            }

        }


        // console.log(menuItem);
        // reset();
    }
    return (
        <div>
            <SectionTitle info={info} ></SectionTitle>
            <form className='bg-[#F3F3F3] max-w-screen-md mx-auto p-12 grid grid-cols-1 gap-6 md:grid-cols-2' onSubmit={handleSubmit(onSubmit)}>

                <label className="form-control w-full md:col-span-full">
                    <div className="label">
                        <span className="label-text">Recipe name <em className='text-red-600'>*</em></span>
                    </div>
                    <input type="text" placeholder="Recipe name"{...register('name', { required: "Name is required!" })} className="input input-bordered w-full " />
                    {errors.name && <p className='text-red-600'> {errors.name.message}</p>}
                </label>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Category <em className='text-red-600'>*</em></span>
                    </div>
                    <select {...register('category', { required: "Category is required!" })} defaultValue="" className="select select-bordered w-full">
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
                    <input type="number" placeholder="Price"{...register('price', { required: "Price is required!" })} className="input input-bordered w-full" />
                    {errors.price && <p className='text-red-600'> {errors.price.message}</p>}
                </label>
                <label className="form-control w-full md:col-span-full">
                    <div className="label">
                        <span className="label-text">Recipe Details <em className='text-red-600'>*</em></span>
                    </div>
                    <textarea className="textarea textarea-lg textarea-bordered" placeholder="Recipe Details" {...register('recipe', { required: "Recipe is required!" })}></textarea>
                    {errors.recipe && <p className='text-red-600'> {errors.recipe.message}</p>}
                </label>
                <label className="form-control w-full md:col-span-full">
                    {/* <div className="label">
                        <span className="label-text">Price <em className='text-red-600'>*</em></span>
                    </div> */}
                    <input type="file" {...register('image', { required: "Upload image is required!" })} className="file-input bg-[#F7F7F7]  file-input-bordered w-full max-w-xs" />
                    {errors.image && <p className='text-red-600'> {errors.image.message}</p>}
                </label>

                {/* <div className="label">
                        <span className="label-text">Price <em className='text-red-600'>*</em></span>
                    </div> */}
                <button className="btn bg-gradient-to-r from-[#835D23] to-[#B58130] text-white" >Add Item <FaUtensils /></button>



            </form>
        </div>
    );
};

export default AddItems;