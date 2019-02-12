interface State {
	type: string;
	placeholder: string;
	value: string;
	onChangeInput: (event: React.SyntheticEvent) => void;
}

export { State };
