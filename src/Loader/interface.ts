import { ComponentClass } from 'react';

interface LoaderState {
    isLoader: boolean
}
interface StateToProps {
    isLoader: boolean;
}

interface DispatchToProps {
    loader: ComponentClass<Pick<any, string | number | symbol>, any>;
    switchLoader: (enable: boolean) => void;
}

export { DispatchToProps, LoaderState, StateToProps };