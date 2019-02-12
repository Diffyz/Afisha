import { DOMAIN_NAME } from 'src/constants';

const fetchHelper = {
	Get: async (searchCriteria: string): Promise<any> => {
		return fetch(`${DOMAIN_NAME}${searchCriteria}`)
			.then((response) => {
				return response.json();
			})
			.then((response) => {
				return response;
			});
	},
};

export { fetchHelper };
