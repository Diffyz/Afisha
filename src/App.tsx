import * as React from 'react';
import { Provider } from 'react-redux';
import { SchedulePreloader } from './Schedule/SchedulePreloader';
import { store } from './common/combineReducers';
import { Route, Switch } from 'react-router-dom';
import { LoginPreloader } from './Login/Login';
import { Film } from './Schedule/Film/Film';
import { getCookie } from './Login/actions';

const withAuth = (component: any): any => {
	return getCookie() != '' ? component : LoginPreloader;
}

export class App extends React.Component {
	public render() {
		return (
			<Provider store={store}>
				<Switch>
					<Route exact path='/schedule/film/:number' component={withAuth(Film)} />
					<Route path='/login' component={LoginPreloader} />
					<Route path='/schedule' component={withAuth(SchedulePreloader)} />
				</Switch>
			</Provider>
		);
	}
}
