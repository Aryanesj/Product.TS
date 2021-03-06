import { FC } from 'react';
import { SignInPage } from '../pages/SignInPage/SignInPage';
import { HomePage } from '../pages/HomePage/HomePage';
import { Page404 } from '../pages/Page404/Page404';

interface RouteItem {
	name: Routes;
	path: string;
	component: FC;
	private: boolean;
};

type Routes = 'SignInPage' | 'HomePage' | 'Page404';

export const routeList: RouteItem[] = [
	{
		name: 'SignInPage',
		path: '/sign-in',
		component: SignInPage,
		private: false,
	},

	{
		name: 'HomePage',
		path: '/home-page',
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

export const getRouthPath = (routeName: Routes): string => {
	const pathIndex = routeList.findIndex(
		(routeItem) => routeItem.name === routeName,
	);	

	if(pathIndex === -1) {
		throw new Error('there is no route');
	}

	return routeList[pathIndex].path;
};