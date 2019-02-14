import { AfishaLoad, AfishaViewModel } from './interfaces';
import { SET_KINO_AFISHA } from './constants';

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
				href: ['']
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
	],
};

const reducer = (state = initialState, action: any): AfishaLoad<AfishaViewModel> => {
	switch (action.type) {
		case SET_KINO_AFISHA:
			return setKinoAfisha(action.result);
	}
	return state;
};

const setKinoAfisha = (
	values: AfishaViewModel[],
): AfishaLoad<AfishaViewModel> => {
	return { result: values };
};

export { reducer };
