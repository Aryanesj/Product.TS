import { FC } from 'react';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { appSelectors, appActions } from '../../store/app';
import { getValueString } from '../../store/app/selectors';

const MSG2 = 'Click in Home Page';

export const HomePage: FC = () => {
	const test2 = useAppSelector(appSelectors.getValueString);
	const dispatch = useAppDispatch();

	const handleBtnClick = () => {
		dispatch(appActions.setValue(MSG2));
	}

	return (
		<div>
			<div>Home Page: {test2}</div>
			<div>
				<button 
          type={'button'}
          style={{ width: '100px', padding: '3px', marginTop: '10px' }}
          onClick={handleBtnClick}
         >
					Click Me
				</button>
			</div>
		</div>
	)
};