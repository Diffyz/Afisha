import * as React from 'react';

import { DispatchToProps, StateToProps, FormState } from './interfaces';
import { Input } from 'src/common/Input/Input';
import { Button } from 'src/common/buttons/Button';
import { authorization } from './actions';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import './login.css';
import { SCHEDULE_URI } from 'src/constants';

class Form extends React.Component<FormState & StateToProps> {
	public render() {
		return (
			<div className='container'>
				<div className='loginForm'>
					<h3 className='greeting'>Welcome Back!</h3>
					<Input
						onChangeInput={this.props.onLoginChange}
						value={this.props.login}
						placeholder='email'
						type='Email'
					/>
					<Input
						onChangeInput={this.props.onPasswordChange}
						value={this.props.password}
						placeholder='password'
						type='password'
					/>
					<div className={this.props.isRegistration ? '' : 'hide'}>
						<Input
							onChangeInput={this.props.switchToRegistration}
							value={this.props.password}
							placeholder='Confirm Password'
							type='password'
						/>
					</div>
					<span>
						<Button value='Log In' onSubmit={this.props.onSubmit} />
						<Button value='Registration' onSubmit={this.props.switchToRegistration} />
					</span>
				</div>
			</div>
		);
	}
}

class Login extends React.Component<RouteComponentProps & StateToProps & DispatchToProps, StateToProps> {
	constructor(props: RouteComponentProps & StateToProps & DispatchToProps) {
		super(props);
		this.state = {
			login: '',
			password: '',
			isRegistration: false,
		};

		this.onLoginChange = this.onLoginChange.bind(this);
		this.onPasswordChange = this.onPasswordChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onLoginChange(event: React.SyntheticEvent): void {
		const target = event.target as HTMLInputElement;
		this.setState({ login: target.value });
	}

	onPasswordChange(event: React.SyntheticEvent): void {
		const target = event.target as HTMLInputElement;
		this.setState({ password: target.value });
	}

	onSubmit(): void {
		if (this.state.login == 'admin' && this.state.password == 'admin') {
			authorization(this.state.login);
			this.props.history.push(SCHEDULE_URI);
		} else {
			alert('login: admin\n\npassword: admin');
		}
	}

	switchToRegistration = (): void => {
		alert('Not implement yet');
		//this.setState((priviusState) => ({ isRegistration: !priviusState.isRegistration }));
	};

	render() {
		return (
			<div className='col-md-6 mx-auto'>
				<Form
					isRegistration={this.state.isRegistration}
					switchToRegistration={this.switchToRegistration}
					login={this.state.login}
					password={this.state.password}
					onLoginChange={this.onLoginChange}
					onPasswordChange={this.onPasswordChange}
					onSubmit={this.onSubmit}
				/>
			</div>
		);
	}
}

export const LoginPreloader = withRouter(Login);
