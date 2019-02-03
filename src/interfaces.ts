import { AfishaViewModel, AfishaLoad } from './Schedule/interfaces';
import { Login } from './Login/interfaces';

interface State {
	reducerKinoAfisha: AfishaLoad<AfishaViewModel>;
	reducerLogin: Login;
}

export { State };
