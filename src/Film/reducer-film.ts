import { FilmState } from './interfaces';
import { SET_FILM } from 'src/Schedule/constants';
import { AfishaViewModel } from 'src/Schedule/interfaces';

const initialState: FilmState = {
    film: {
        id: '',
        name: '',
        url: '',
        image: '',
        vote: '',
        count_vote: '',
        imdb: '',
        country: '',
        actors: {
            partUrl: '',
            name: '',
        },
        premier_ua: '',
        sessions: {
            id: '',
            name: '',
            address: '',
            url: '',
            session: '',
        },
    },
};

const reducer = (state = initialState, action: any): FilmState => {
    switch (action.type) {
        case SET_FILM:
            return setFilm(action.value);
    }
    return state;
};
const setFilm = (value: AfishaViewModel): FilmState => {
    return { film: value }
}

export { reducer };
