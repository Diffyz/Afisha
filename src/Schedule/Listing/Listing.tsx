import * as React from 'react';

import { FilmViewModel } from '../interfaces';
import { FULL_URL_KINO_AFISHA, SCHEDULE_URI } from '../../constants';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Button } from '../../../src/common/buttons/Button';

import './listing.css';
class Listing extends React.Component<RouteComponentProps & RouteComponentProps & FilmViewModel> {
    render() {
        const title = this.props.film.name;
        const image = this.props.film.image.replace('sm_', '');
        return (
            <article className='poster'>
                <a className='poster_front' href='/123'>
                    <img className='img' src={FULL_URL_KINO_AFISHA + image} alt={title} title={title}></img>
                </a>
                <div className="poster_back">
                    <div className="poster_content">
                        <div className="poster_contentLine">
                            <div className="poster_contentTop">
                                <span className="link link-posterName"><span className="link_border">{this.props.film.name}</span></span>
                                <span className="poster_info">{this.props.film.country}</span>
                                <br></br>
                                <span className="poster_info">Rating {this.props.film.vote}</span>

                            </div>
                        </div>
                        <div className="poster_contentLine">
                            <div className="poster_contentBottom">
                                <div className="poster_actions">
                                    <div className="poster_actionsRight">
                                        <Button value='Подробнее' onSubmit={() => { this.props.history.push(`${SCHEDULE_URI}/film/${this.props.film.id}`) }}></Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article >
        )
    }
}

export default withRouter(Listing); 