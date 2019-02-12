import * as React from 'react';

import './input.css';
import { State } from './interfaces';

export class Input extends React.Component<State> {
	public render() {
		return (
			<div className='divInput'>
				<input
					className='input'
					value={this.props.value}
					onChange={this.props.onChangeInput}
					type={this.props.type}
					placeholder={this.props.placeholder}
				/>
			</div>
		);
	}
}
