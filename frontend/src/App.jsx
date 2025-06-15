import React from 'react';
import Button from './components/Button';
import HomePage from './pages/HomePage';
import LoginForm from './components/loginForm';
import AuthPage from './pages/AuthPage';
import { BrowserRouter, Route, Routes } from 'react-router';
import RegisterForm from './components/registerForm';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/login" element={<LoginForm />} />
				<Route path="/register" element={<RegisterForm />} />
				<Route path="/" element={<HomePage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
