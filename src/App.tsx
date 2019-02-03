import * as React from 'react';
import { Provider } from 'react-redux';
import { SchedulePreloader } from './Schedule/SchedulePreloader';
import { store } from './common/combineReducers';

export class App extends React.Component {
	public render() {
		return (
			<Provider store={store}>
				<SchedulePreloader />
			</Provider>
		);
	}
}
