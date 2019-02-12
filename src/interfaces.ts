import { AfishaViewModel, AfishaLoad } from './Schedule/interfaces';
import { LoginState } from './Login/interfaces';
import { LoaderState } from './Loader/interface';
import { FilmState } from './Film/interfaces';

interface ReducerState {
	reducerKinoAfisha: AfishaLoad<AfishaViewModel>;
	reducerLogin: LoginState;
	reducerLoader: LoaderState;
	reducerFilm: FilmState;
}

export { ReducerState };
