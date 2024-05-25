import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const SignUp = () => {
    const { user, loading, createUser, signIn, logOut } = useContext(AuthContext)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const onSubmit = (data) => {
        console.log(data);
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