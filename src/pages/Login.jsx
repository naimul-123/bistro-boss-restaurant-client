import React, { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SocialLogIn from '../components/SocialLogIn';
const Login = () => {
	const [disabled, setDisabled] = useState(true)
	const navigate = useNavigate();
	const location = useLocation();

	const from = location.state?.from?.pathname || "/"
	const { signIn } = useContext(AuthContext)
	useEffect(() => {
		loadCaptchaEnginge(6)
	}, []);
	const handleLogin = (e) => {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value
		const password = form.password.value
		signIn(email, password)
			.then(result => {
				if (result.user) {
					Swal.fire({
						title: "Successfully loged in!",
						showClass: {
							popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `
						},
						hideClass: {
							popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `
						}
					});

					navigate(from, { replace: true })
				}

				// console.log(result.user)
			})
			.catch(err => console.log(err))

	}

	const handleValidateCaptcha = (e) => {
		const user_captcha_value = e.target.value;
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

						</div>
						<div className='form-control'>
							<label className='label'>
								<LoadCanvasTemplate />
							</label>
							<input
								onBlur={handleValidateCaptcha}
								type='text'
								name='captcha'

								placeholder='captcha'
								className='input input-bordered'
								required
							/>
							{/* <button className='btn btn-outline btn-sm my-3' onClick={handleValidateCaptcha}>Validate</button> */}

						</div>
						<div className='form-control mt-6'>
							<input type="submit" disabled={disabled} value="Login" className='btn btn-primary' />
							<label className='label'>
								<p>Are you new? go to <Link to="/signup">SignUp page</Link></p>
							</label>
						</div>
					</form>
					<SocialLogIn></SocialLogIn>
				</div>
			</div>
		</div>
	);
};

export default Login;
