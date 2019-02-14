import * as React from 'react';

import { State } from './interfaces';

import './input.css';
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
