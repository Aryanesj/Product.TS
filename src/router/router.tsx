import { FC } from 'react';
import { SignUpPage } from '../pages/SignUpPage/SignUpPage';
import { Routes, Route } from 'react-router-dom';

export const Router: FC = () => {
	return ( 
		<>
			<Routes>
				<Route path={'/sign-in'} element={<SignUpPage />} />
			</Routes>
		</>
	);
};