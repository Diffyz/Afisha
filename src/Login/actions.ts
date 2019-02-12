import { LoginState } from './interfaces';
import { AFISHA_COOKIE_NAME } from 'src/Schedule/constants';

const authorization = (login: string): LoginState => {
    //TODO fetch
    return setCookie(login)
}

const setCookie = (login: string): LoginState => {
    const user: LoginState = {
        name: login,
        token: Math.random().toString(36).substr(2),
    };
    document.cookie = `${AFISHA_COOKIE_NAME}=${user.token}`;
    return user;
}

const getCookie = (): string => {
    const name = AFISHA_COOKIE_NAME + '=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return '';
}

export { authorization, getCookie }