import React, { useReducer } from 'react';
import appReducer from './appReducer';
import AppContext from './appContext';

import { TOGGLE_DRAWER } from '../types.js';

const AppState = (props) => {
	const initialState = {
		isDisplayDrawer: false,
	};

	const [state, dispatch] = useReducer(appReducer, initialState);

	const toggleDrawer = () => {
		dispatch({
			type: TOGGLE_DRAWER,
		});
	};

	return (
		<AppContext.Provider
			value={{
				isDisplayDrawer: state.isDisplayDrawer,
				toggleDrawer,
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
};

export default AppState;
