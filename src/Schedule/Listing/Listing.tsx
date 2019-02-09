import * as React from 'react';
import { FilmViewModel } from '../interfaces';
import { FULL_URL_KINO_AFISHA } from 'src/constants';

import './listing.css';
import { Button } from 'src/common/buttons/Button';
import { Link } from 'react-router-dom';

class Listing extends React.Component<FilmViewModel> {
    render() {
        const title = this.props.film.name;
        const image = this.props.film.image.replace('sm_', '');
        return (
            <article className='poster'>
                <a className='poster_front' href='/123'>
                    <img src={FULL_URL_KINO_AFISHA + image} alt={title} title={title}></img>
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
                                        <Link
                                            to={{
                                                pathname: `/schedule/film/${this.props.film.id}`,
                                                film: { message: this.props.film }
                                            }} >
                                            <Button value='Подробнее' onSubmit={() => { }}></Button>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="poster_link" href="https://www.kinoafisha.info/movies/8175985/"></a>
                </div>
            </article >
        )
    }
}

export { Listing }