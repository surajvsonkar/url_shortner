import React, {useState} from 'react';
import LoginForm from '../components/loginForm';
import RegisterForm from '../components/registerForm';

const AuthPage = () => {

	const [login, setLogin] = useState(true)

	return (
		<>
			<div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
			{login ? <LoginForm state={setLogin} /> : <RegisterForm state={setLogin} />}
				
			</div>
		</>
	);
};

export default AuthPage;
