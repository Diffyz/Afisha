import { Schedule } from './Schedule';
import { connect } from 'react-redux';
import { StateToProps, DispatchToProps } from './interfaces';
import { CLEAR_KINO_AFISHA, SET_KINO_AFISHA } from './constants';
import { State } from 'src/interfaces';

const mapStateToProps = (state: State): StateToProps => {
	console.log(state);
	return {
		result: state.reducerKinoAfisha.result,
	};
};

const mapDispatchToProps = (dispatch: any): DispatchToProps => ({
	setKinoAfishaValues: (result) => dispatch({ type: SET_KINO_AFISHA, result }),
	clear: () => dispatch({ type: CLEAR_KINO_AFISHA }),
});

export const SchedulePreloader = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Schedule);
