import React, { useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
const Login = () => {
	const [disabled, setDisabled]= useState(true)
	const captchaRef = useRef(null)
	useEffect(() => {
		loadCaptchaEnginge(6)
	},[])
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value
        const password = form.password.value
        console.log(email, password);
	}
	
	const handleValidateCaptcha = () => {
		const user_captcha_value = captchaRef.current.value;
		if (validateCaptcha(user_captcha_value)) {
			setDisabled(false)
		}
		else {
			setDisabled(true)
		}
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
					<form className='card-body' onSubmit={handleLogin}>
						<div className='form-control'>
							<label className='label'>
								<span className='label-text'>Email</span>
							</label>
							<input
                                type='email'
                                name='email'
								placeholder='email'
								className='input input-bordered'
								required
							/>
						</div>
						<div className='form-control'>
							<label className='label'>
								<span className='label-text'>Password</span>
							</label>
							<input
                                type='password'
                                name='password'
								placeholder='password'
								className='input input-bordered'
								required
							/>
							<label className='label'>
								<a
									href='#'
									className='label-text-alt link link-hover'>
									Forgot password?
								</a>
							</label>
						</div>
						<div className='form-control'>
							<label className='label'>
								<LoadCanvasTemplate/>
							</label>
							<input
								onBlur={handleValidateCaptcha}
                                type='text'
								name='captcha'
								ref={captchaRef}
								placeholder='captcha'
								className='input input-bordered'
								required
							/>
							{/* <button className='btn btn-outline btn-sm my-3' onClick={handleValidateCaptcha}>Validate</button> */}
							
						</div>
						<div className='form-control mt-6'>
							<input type="submit" disabled={disabled} value="Login" className='btn btn-primary' />
							
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
