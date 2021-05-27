import React, { useReducer } from 'react';
import axios from 'axios';
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

	const sendMessage = async (details) => {
		try {
			const res = await axios.post('/api/contact', details);
			return res.data;
		} catch (err) {
			console.log(err);
		}
	};

	// Register New Member
	const registerMember = async (details) => {
		try {
			const res = await axios.post('/api/membership', details);
			return res.data;
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<AppContext.Provider
			value={{
				isDisplayDrawer: state.isDisplayDrawer,
				toggleDrawer,
				sendMessage,
				registerMember,
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
};

export default AppState;
