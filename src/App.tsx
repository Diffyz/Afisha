import * as React from 'react';
import { Provider } from 'react-redux';
import { SchedulePreloader } from './Schedule/SchedulePreloader';
import { store } from './common/combineReducers';
import { Route, Switch, withRouter } from 'react-router-dom';
import { LoginPreloader } from './Login/Login';
import { withAuth } from './common/HOC/auth';
import { withLoader } from './common/HOC/loader';
import Film from './Film/Film';
import YMaps from './YMaps/Ymaps';

class App extends React.Component {
	public render() {
		return (
			<Provider store={store}>
				<Switch>
					<Route path='/YMaps' component={YMaps}/>
					<Route exact path='/schedule/film/:number' component={withAuth(withLoader(Film))} />
					<Route path='/login' component={LoginPreloader} />
					<Route path='/' component={withAuth(withLoader(SchedulePreloader))} />
				</Switch>
			</Provider>
		);
	}
}

export default withRouter<any>((App)); 