import React from 'react';
import './App.css';
import { Router } from './router/router';
import { Link } from 'react-router-dom';

export const App: React.FC = () => {
  return (
  		<div className="wrap">
  			<div>
  				App <Link to={'/sign-in'}>Go to Sign App</Link>
  			</div>
  			<div>
  				<Router />
  			</div>
  		</div>
  	);
};