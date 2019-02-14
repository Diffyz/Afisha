import * as React from 'react';

import Header from './Header/Header';
import Listing from './Listing/Listing';
import { GetAfisha } from './actions';
import { StateToProps, DispatchToProps, AfishaViewModel } from './interfaces';
import { DispatchToProps as DispatchToPropsLoader } from '../Loader/interface';

import './schedule.css';
import '../common/styles.css';
class Schedule extends React.Component<DispatchToProps & StateToProps & DispatchToPropsLoader & { loader: React.SFC }> {
	componentDidMount = async (): Promise<void> => {
		this.props.switchLoader(true);
		const data: AfishaViewModel[] = await GetAfisha();
		this.props.setKinoAfishaValues(data);
		this.props.switchLoader(false);
	};

	public render() {
		const { loader: Loader } = this.props;
		return (
			<>
				<Header />
				<Loader>
					<div className='article-body'>
						<div className='articles'>
							{this.props.result.map(x => (
								<Listing key={x.url} film={x} />
							))}
						</div>
					</div>
				</Loader>
			</>
		);
	}
}

export { Schedule };
