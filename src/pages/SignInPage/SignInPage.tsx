import { FC } from 'react';
import { useAppSelector } from '../../store/hooks';
import { useAppDispatch } from '../../store/hooks';
import { appActions, appSelectors } from '../../store/app';
import { getTest } from '../../store/app/selectors';

const MSG = 'We click the button';

export const SignInPage: FC = () => {
	const test1 = useAppSelector(appSelectors.getTest);
	const dispatch = useAppDispatch();

	const handleBtnClick = () => {
		// console.log('test clicked');
		dispatch(appActions.setTest(MSG));
	}

	return (
		<>
			<div>Sign In Page: {test1}</div>
			<div>
				<button 
				  type={'button'}
          style={{ width: '100px', padding: '3px', marginTop: '10px' }}
          onClick={handleBtnClick}
				>
					Click Me
				</button>
			</div>
		</>
	)
};