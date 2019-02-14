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
	deleteAllCookies();
	return { ...initialState };
};

const signUp = (state: LoginState): LoginState => {
	return { ...state };
};

const deleteAllCookies = () => {
	var cookies = document.cookie.split(";");

	for (let i = 0; i < cookies.length; i++) {
		let cookie = cookies[i];
		let eqPos = cookie.indexOf("=");
		let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
		document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
	}
}

export { reducer };
