import { FC } from 'react';
import { SignInPage } from '../pages/SignInPage/SignInPage';
import { HomePage } from '../pages/HomePage/HomePage';
import { Page404 } from '../pages/Page404/Page404';

interface Route {
	name: string;
	path: string;
	component: FC;
	private: boolean;
};

export const routeList: Route[] = [
	{
		name: 'SignInPage',
		path: '/sign-in',
		component: SignInPage,
		private: false,
	},

	{
		name: 'HomePage',
		path: '/sign-in',
		component: HomePage,
		private: true,
	},

	{
		name: 'Page404',
		path: '*',
		component: Page404,
		private: false,
	},
];