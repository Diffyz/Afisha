import * as React from 'react';
import { State } from './interfaces';

import './button.css';
class Button extends React.Component<State> {
	render() {
		return (
			<input className='btn' type='button' value={this.props.value} onClick={this.props.onSubmit} />
		);
	}
}

export { Button };
