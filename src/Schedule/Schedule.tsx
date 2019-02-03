import * as React from 'react';
import { GetAfisha } from './actions';
import { StateToProps, DispatchToProps, AfishaViewModel } from './interfaces';
import Header from './Header/Header';

class Schedule extends React.Component<DispatchToProps & StateToProps> {
	componentDidMount = async (): Promise<void> => {
		const data: AfishaViewModel[] = await GetAfisha();
		this.props.setKinoAfishaValues(data);
	};

	public render() {
		return (
			<div>
				<Header />
				<p>123</p>
			</div>
		);
	}
}
export { Schedule };
