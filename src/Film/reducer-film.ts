import { FilmState } from './interfaces';
import { AfishaViewModel } from '../Schedule/interfaces';
import { SET_FILM } from '../Schedule/constants';

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
            href:['']
        },
        premier_ua: '',
        sessions: [{
            id: '',
            name: '',
            address: '',
            url: '',
            session: '',
        }],
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
