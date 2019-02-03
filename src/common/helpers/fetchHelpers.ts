import { DomainName } from 'src/constants';

const fetchHelper = {
	Get: async (searchCriteria: string): Promise<any> => {
		return fetch(`${DomainName}${searchCriteria}`)
			.then((response) => {
				return response.json();
			})
			.then((response) => {
				return response;
			});
	},
};

export { fetchHelper };
