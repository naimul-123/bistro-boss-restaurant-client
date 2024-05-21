import React from 'react';

const Login = () => {
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value
        const password = form.password.value
        console.log(email, password);
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
						<div className='form-control mt-6'>
							<button className='btn btn-primary'>Login</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
