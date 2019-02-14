import { LoginState } from './interfaces';
import { SIGN_OUT, SIGN_IN, SIGN_UP } from 'src/Schedule/constants';

const initialState: LoginState = {
	name: '',
	token: '',
};

const reducer = (state = initialState, action: any): LoginState => {
	switch (action.type) {
		case SIGN_OUT:
			return signOut();
		case SIGN_IN:
			return signIn(state, action);
		case SIGN_UP:
			return signUp(state);
	}

	return state;
};

const signIn = (state: LoginState, action: any): LoginState => {
	return { ...state, name: action.user.name, token: action.user.token };
};

const signOut = (): LoginState => {
	return { ...initialState };
};

const signUp = (state: LoginState): LoginState => {
	return { ...state };
};

export { reducer };
