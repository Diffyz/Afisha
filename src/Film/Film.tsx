import * as React from 'react';
import { GetAfisha } from 'src/Schedule/actions';
import { AfishaViewModel } from 'src/Schedule/interfaces';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { StateToProps, DispatchToProps } from './interfaces';
import { DispatchToProps as DispatchToPropsLoader } from '../Loader/interface'
import { Mapper } from 'src/Schedule/mappers';
import { ReducerState } from 'src/interfaces';
import { SET_FILM } from 'src/Schedule/constants';
import { connect } from 'react-redux';

class Film extends React.Component<RouteComponentProps & StateToProps & DispatchToProps & { loader: React.SFC } & DispatchToPropsLoader> {
    componentDidMount = async (): Promise<void> => {
        this.props.switchLoader(true);
        if (this.props.film.id == '') {
            const url: string = window.location.pathname;
            const id: string = url.substring(url.lastIndexOf('/') + 1);
            const viewModels: AfishaViewModel[] = await GetAfisha();

            const viewModel: AfishaViewModel | undefined = viewModels.find(x => x.id === id);
            if (viewModel) {
                this.props.setFilm(Mapper.mapViewModel(viewModel));
            } else {
                this.props.history.push('/schedule');
            }
        }
        this.props.switchLoader(false);
    }

    render() {
        console.log(this.props.film)
        const { loader: Loader } = this.props;
        return (
            <Loader>
                <div>3333</div>
            </Loader>
        )
    }
}

const mapStateToProps = (state: ReducerState): StateToProps => {
    return {
        film: state.reducerFilm.film
    }
}

const mapDispatchToProps = (dispatch: any): DispatchToProps => ({
    setFilm: (value: AfishaViewModel) => dispatch({ type: SET_FILM, value: value })
})

export default withRouter<any>(connect(mapStateToProps, mapDispatchToProps)(Film));