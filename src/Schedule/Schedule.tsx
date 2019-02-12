import * as React from 'react';
import { GetAfisha } from './actions';
import { StateToProps, DispatchToProps, AfishaViewModel } from './interfaces';
import Header from './Header/Header';
import { Listing } from './Listing/Listing';

import './schedule.css';
import '../common/styles.css';

class Schedule extends React.Component<DispatchToProps & StateToProps> {
	componentDidMount = async (): Promise<void> => {
		const data: AfishaViewModel[] = await GetAfisha();
		this.props.setKinoAfishaValues(data);
	};

	public render() {
		return (
			<div>
				<Header />
				<div className='article-body'>
					<div className='articles'>
						{this.props.result.map(x => (
							<Listing key={x.url} film={x} />
						))}
					</div>
				</div>
			</div>
		);
	}
}
export { Schedule };
