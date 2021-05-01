import { TOGGLE_DRAWER } from '../types';

const appReducer = (state, action) => {
	switch (action.type) {
		case TOGGLE_DRAWER:
			return {
				...state,
				isDisplayDrawer: !state.isDisplayDrawer,
			};

		default:
			return state;
	}
};

export default appReducer;
