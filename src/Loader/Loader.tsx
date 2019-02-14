import * as React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import { DispatchToProps, StateToProps } from './interface';
import { withRouter, RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';
import { ReducerState } from 'src/interfaces';

import './loader.css';
class Loader extends React.Component<RouteComponentProps & StateToProps, DispatchToProps> {
    render() {
        return (
            <div>
                {this.props.isLoader
                    ? <div className='loader'>
                        <CircularProgress />
                    </div>
                    : this.props.children}
            </div>
        );
    }
}

const mapStateToProps = (state: ReducerState): StateToProps => {
    return {
        isLoader: state.reducerLoader.isLoader
    };
};

export default withRouter(connect(mapStateToProps)(Loader));