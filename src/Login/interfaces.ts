interface LoginState {
	name: string;
	token: string;
}

interface DispatchToProps {
	signIn: (user: LoginState) => void;
}
interface StateToProps {
	login: string;
	password: string;
	isRegistration: boolean;
}

interface FormState {
	onLoginChange: (event: React.SyntheticEvent) => void;
	onPasswordChange: (event: React.SyntheticEvent) => void;
	switchToRegistration: () => void;
	onSubmit: () => void;
}

export { LoginState, DispatchToProps, StateToProps, FormState };
