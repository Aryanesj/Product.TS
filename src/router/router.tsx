import { FC } from 'react';
import { SignInPage } from '../pages/SignInPage/SignInPage';
import { Routes, Route } from 'react-router-dom';
import { routeList } from './routeList';

export const Router: FC = () => {
	return ( 
		<>
			<Routes>
				<Route path={'/sign-in'} element={<SignInPage />} />
			</Routes>
		</>
	);
};