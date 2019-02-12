import Loader from "src/Loader/Loader";
import { DispatchToProps } from 'src/Loader/interface';
import { SWITCH_LOADER } from 'src/Schedule/constants';
import { connect } from 'react-redux';

const withLoader = (component: any): any => {
    return connect(() => ({}),
        mapDispatchToProps
    )(component);
}

const mapDispatchToProps = (dispatch: any): DispatchToProps => ({
    loader: Loader,
    switchLoader: (enable) => dispatch({ type: SWITCH_LOADER, value: enable })
});

export { withLoader }