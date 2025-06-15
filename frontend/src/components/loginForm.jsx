import React, { useState } from 'react';
import { loginUser } from '../api/user.api';
import { flushSync } from 'react-dom';
import { useNavigate } from 'react-router';

const LoginForm = (props) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const navigate = useNavigate()

	const handleSubmit = async (e) => {
		setLoading(true);
		setError('');

		try {
			await loginUser(email, password);
			setLoading(false);
			alert("user logged in successfully")
			navigate('/')
		} catch (err) {
			setLoading(false);
			setError(err.message || 'Login failed, please check your credentials');
		}
	};

	return (
		<div className="w-full max-w-md mx-auto">
			<div className="bg-white shadow-md rounded px-8 pb-4">
				<h2 className="text-2xl font-bold text-center mb-6">Login</h2>

				{error && (
					<div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
						{error}
					</div>
				)}

				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2">
						Email
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3"
						id="email"
						type="email"
						placeholder="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					></input>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2">
						Password
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="password"
						type="password"
						placeholder="***********"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					></input>
				</div>

				<div className='flex items-center justify-between'>
					<button onClick={handleSubmit} className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full ${loading ? 'opacity-50 cursor-not-allowed'  : ''}`} type='submit' disabled={loading}>
					{loading ? 'Signing in.....' : 'Sign In'}
					</button>
				</div>

				<div className='text-center mt-4'>
				<p className='text-sm text-gray-600'>
					Don't have an account? <span onClick={()=> {
					navigate('/register')
					}} className='text-blue-500 hover:text-blue-700 cursor-pointer'>Register</span>
				</p>
				</div>
			</div>
		</div>
	);
};

export default LoginForm;
