import { LoaderState } from './interface';
import { SWITCH_LOADER } from 'src/Schedule/constants';

const reducer = (state = {isLoader: false}, action: any): LoaderState => {
    switch (action.type) {
        case SWITCH_LOADER:
            return switchLoader(action.value);
    }
    return state;
};

const switchLoader = (value: boolean): LoaderState => {
    return { isLoader: value }
}

export { reducer };
