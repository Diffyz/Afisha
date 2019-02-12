import * as React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { DispatchToProps, StateToProps } from './interface';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import './loader.css';
import { ReducerState } from 'src/interfaces';

class Loader extends React.Component<StateToProps, DispatchToProps> {
    constructor(props: StateToProps) {
        super(props);
    }
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

export default withRouter<any>(connect(mapStateToProps)(Loader));