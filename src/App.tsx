import * as React from 'react';

import Film from './Film/Film';
import NotFound from './NotFound/NotFound';
import { Provider } from 'react-redux';
import { SchedulePreloader } from './Schedule/SchedulePreloader';
import { store } from './common/combineReducers';
import { Route, Switch, withRouter, Redirect, RouteComponentProps } from 'react-router-dom';
import { LoginPreloader } from './Login/Login';
import { withAuth } from './common/HOC/auth';
import { withLoader } from './common/HOC/loader';
import { SCHEDULE_URI, NOT_FOUND_URI } from './constants';

class App extends React.Component<RouteComponentProps> {
	public render() {
		return (
			<Provider store={store}>
				<Switch>
					<Route exact path='/' component={withAuth(withLoader(SchedulePreloader))} />
					<Route path ={`${SCHEDULE_URI}/film/:id`} component={withAuth(withLoader(Film))} />
					<Route path='/login' component={LoginPreloader} />
					<Route path={SCHEDULE_URI} component={withAuth(withLoader(SchedulePreloader))} />
					<Route path={NOT_FOUND_URI} component={NotFound} />				
					<Route component={() => <Redirect  push to={NOT_FOUND_URI}/>} />
				</Switch>
			</Provider>
		);
	}
}

export default withRouter(App); 