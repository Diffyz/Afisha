import { Schedule } from './Schedule';
import { connect } from 'react-redux';
import { StateToProps, DispatchToProps } from './interfaces';
import { CLEAR_KINO_AFISHA, SET_KINO_AFISHA } from './constants';
import { ReducerState } from 'src/interfaces';
import { withRouter } from 'react-router';

const mapStateToProps = (state: ReducerState): StateToProps => {
	return {
		result: state.reducerKinoAfisha.result,
	};
};

const mapDispatchToProps = (dispatch: any): DispatchToProps & DispatchToProps => ({
	setKinoAfishaValues: (result) => dispatch({ type: SET_KINO_AFISHA, result }),
	clear: () => dispatch({ type: CLEAR_KINO_AFISHA }),
});

export const SchedulePreloader = withRouter(connect(mapStateToProps, mapDispatchToProps)(Schedule) as React.ComponentType<any>);
