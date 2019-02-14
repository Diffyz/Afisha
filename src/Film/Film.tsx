import * as React from 'react';

import { withRouter, RouteComponentProps } from 'react-router-dom';
import { StateToProps, DispatchToProps, RouteState } from './interfaces';
import { DispatchToProps as DispatchToPropsLoader } from '../Loader/interface'
import { connect } from 'react-redux';
import { AfishaViewModel } from '../Schedule/interfaces';
import { GetAfisha } from '../Schedule/actions';
import { SET_FILM } from '../Schedule/constants';
import { ReducerState } from '../interfaces';
import { FULL_URL_KINO_AFISHA, NOT_FOUND_URI } from '../constants';
import { Actor } from './Actors/Actor';
import { Session } from './Session/Session';

import './film.css';
import Header from 'src/Schedule/Header/Header';

class Film extends React.Component<RouteComponentProps<RouteState> & StateToProps & DispatchToProps & { loader: React.SFC } & DispatchToPropsLoader> {
    componentDidMount = async (): Promise<void> => {
        if (this.props.film.id !== this.props.match.params.id) {
            this.props.switchLoader(true);
            const viewModels: AfishaViewModel[] = await GetAfisha();
            const viewModel: AfishaViewModel | undefined = viewModels.find(x => x.id === this.props.match.params.id);
            viewModel
                ? this.props.setFilm(viewModel)
                : this.props.history.push(NOT_FOUND_URI);
        }
        this.props.switchLoader(false);
    }

    getStyles = (image: string) => {
        return {
            backgroundImage: `url('${image}')`,
        }
    }

    render() {
        const image = ` ${FULL_URL_KINO_AFISHA}${this.props.film.image.replace('sm_', '')}`;
        const { loader: Loader } = this.props;
        return (
            <div>
                <Header />
                <Loader>
                    <div className='background' style={this.getStyles(image)}>
                        <div className='content'>
                            <div className='left-side'>
                                <img className='avatar_img' src={image} alt="" />
                            </div>
                            <div className='right-side'>
                                <h4>Название фильма: {this.props.film.name}</h4>
                                <h4>Рейтинг: {this.props.film.vote}</h4>
                                <Actor href={this.props.film.actors.href} />
                                <Session sessions={this.props.film.sessions} />
                            </div>
                        </div>
                    </div>
                </Loader>
            </div>
        )
    }
}

const mapStateToProps = (state: ReducerState): StateToProps => {
    return ({
        film: state.reducerFilm.film
    });
}

const mapDispatchToProps = (dispatch: any): DispatchToProps => ({
    setFilm: (value: AfishaViewModel) => dispatch({ type: SET_FILM, value: value })
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Film));