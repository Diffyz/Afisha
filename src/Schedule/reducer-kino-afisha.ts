import { AfishaLoad, AfishaViewModel } from './interfaces';
import { CLEAR_KINO_AFISHA, SET_KINO_AFISHA } from './constants';

const initialState: AfishaLoad<AfishaViewModel> = {
	result: [
		{
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
	],
};

const reducer = (state = initialState, action: any): AfishaLoad<AfishaViewModel> => {
	switch (action.type) {
		case CLEAR_KINO_AFISHA:
			return clear(state);
		case SET_KINO_AFISHA:
			return setKinoAfisha(state, action.result);
	}
	return state;
};

const clear = (state: AfishaLoad<AfishaViewModel>): AfishaLoad<AfishaViewModel> => {
	return { ...state };
};
const setKinoAfisha = (
	state: AfishaLoad<AfishaViewModel>,
	values: AfishaViewModel[],
): AfishaLoad<AfishaViewModel> => {
	return { ...state, result: values };
};

export { reducer };
