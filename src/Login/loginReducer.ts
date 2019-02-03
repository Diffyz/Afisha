import { Login } from './interfaces';
import { SIGN_OUT, SIGN_IN, SIGN_UP } from 'src/Schedule/constants';

const initialState: Login = {
	id: '',
	name: '',
	token: '',
};
const reducer = (state = initialState, action: any) => {
	switch (action.type) {
		case SIGN_OUT:
			return signOut(state);
		case SIGN_IN:
			return signIn(state);
		case SIGN_UP:
			return signUp(state);
	}

	return state;
};

const signIn = (state: Login): Login => {
	return { ...state };
};
const signOut = (state: Login): Login => {
	return { ...state };
};
const signUp = (state: Login): Login => {
	return { ...state };
};

export { reducer };
