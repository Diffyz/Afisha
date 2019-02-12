import { combineReducers, createStore } from 'redux';
import { reducer as reducerKinoAfisha } from 'src/Schedule/reducer-kino-afisha';
import { reducer as reducerLogin } from 'src/Login/reducer-login';
import { reducer as reducerLoader } from 'src/Loader/loader-reducer';
import { reducer as reducerFilm } from 'src/Film/reducer-film';


const CombineReducers = combineReducers({
	reducerKinoAfisha,
	reducerLogin,
	reducerLoader,
	reducerFilm
});

export const store = createStore(CombineReducers);
