import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxiosPublic from '../hooks/useAxiosPublic';

const SignUp = () => {
    const { user, loading, createUser, signIn, logOut, updateUserProfile } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const onSubmit = (data) => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                if (result.user) {
                    updateUserProfile(data.name, data.photoUrl)
                        .then(() => {
                            logOut()
                                .then(() => {
                                    const userInfo = {
                                        name: data.name,
                                        email: data.email
                                    }

                                    axiosPublic.post('/users', userInfo)
                                        .then(res => {
                                            if (res.data.insertedId) {
                                                reset()
                                                Swal.fire({
                                                    title: "Signed Up!",
                                                    text: "Successfully Signed Up",
                                                    icon: "success"
                                                });
                                                navigate('/login')
                                            }
                                        })


                                })

                        });
                }
            })
    }


    return (
        <div className='hero min-h-screen bg-base-200'>
            <div className='hero-content flex-col md:flex-row'>
                <div className='text-center lg:text-left'>
                    <img
                        src='https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg'
                        className='max-w-sm rounded-lg shadow-2xl'
                    />
                </div>
                <div className='card shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
                    <form className='card-body' onSubmit={handleSubmit(onSubmit)} >
                        <div className='form-control'>
                            <label className='label'>
                                <span className='label-text'>Name</span>
                            </label>
                            <input
                                type='text'
                                {...register('name', { required: true })}
                                placeholder='Your Name'
                                className='input input-bordered'

                            />
                            {errors.name && <p className='text-red-500'>Name must be required</p>}
                        </div>
                        <div className='form-control'>
                            <label className='label'>
                                <span className='label-text'>Photo Url</span>
                            </label>
                            <input
                                type='text'
                                {...register('photoUrl', { required: true })}
                                placeholder='Photo Url'
                                className='input input-bordered'

                            />
                            {errors.photoUrl && <p className='text-red-500'>Photo Url must be required</p>}
                        </div>
                        <div className='form-control'>
                            <label className='label'>
                                <span className='label-text'>Email</span>
                            </label>
                            <input
                                type='email'
                                {...register('email', { required: true })}
                                placeholder='email'
                                className='input input-bordered'

                            />
                            {errors.email && <p className='text-red-500'>Email must be required</p>}
                        </div>
                        <div className='form-control'>
                            <label className='label'>
                                <span className='label-text'>Password</span>
                            </label>
                            <input
                                type='password'
                                {...register('password', {
                                    required: "Password must be required",
                                    minLength: { value: 6, message: "Password Must be atleast 6 charecter" },
                                    validate: {
                                        uppercase: (value) => /[A-Z]/.test(value) || "Password must have a uppercase letter",
                                        lowercase: (value) => /[a-z]/.test(value) || "Password must have a lowercase letter",
                                        number: (value) => /[0-9]/.test(value) || "Password must have a number",
                                        special: (value) => /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(value) || "Password must have a special charecter.",
                                    }
                                })}
                                placeholder='password'
                                className='input input-bordered'

                            />
                            {errors.password?.message && <p className='text-red-500'>{errors.password.message}</p>}


                        </div>

                        <div className='form-control mt-6'>
                            <input type="submit" value="Sign Up" className='btn btn-primary' />
                            <label className='label'>
                                <p>Already have an account? go to <Link to="/login" className="link link-primary link-underline">log in page</Link></p>
                            </label>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default SignUp;