import React from 'react';
import './App.css';
import { Router } from './router/router';
import { NavLink } from 'react-router-dom';
import { getRouthPath } from './router/routeList';

export const App: React.FC = () => {
  return (
  		<div className="wrap">
  			<nav>
  				<ul className='navList'>
            <li>
              <NavLink to={getRouthPath('SignInPage')}>Sign In</NavLink>
            </li>
            <li>
              <NavLink to={getRouthPath('HomePage')}>Home</NavLink>
            </li>
            <li>
              <NavLink to={'/some-adress'}>Some Adress</NavLink>
            </li>
          </ul>
  			</nav>
  			<div>
  				<Router />
  			</div>
  		</div>
  	);
};