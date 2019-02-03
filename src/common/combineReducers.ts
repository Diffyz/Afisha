import { combineReducers, createStore } from 'redux';
import { reducer as reducerKinoAfisha } from 'src/Schedule/reducer-kino-afisha';
import { reducer as reducerLogin } from 'src/Login/loginReducer';

const commentReducers = combineReducers({
	reducerKinoAfisha,
	reducerLogin,
});

export const store = createStore(commentReducers);
