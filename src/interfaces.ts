import { AfishaViewModel, AfishaLoad } from './Schedule/interfaces';
import { LoginState } from './Login/interfaces';

interface ReducerState {
	reducerKinoAfisha: AfishaLoad<AfishaViewModel>;
	reducerLogin: LoginState;
}

export { ReducerState };
