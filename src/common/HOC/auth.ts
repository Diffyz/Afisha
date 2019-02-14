import { getCookie } from 'src/Login/actions';
import { LoginPreloader } from 'src/Login/Login';

const withAuth = (component: any): any => {
    return getCookie() != '' ? component : LoginPreloader;
}

export { withAuth }