import { AfishaViewModel, AfishaLoad } from './interfaces';
import { fetchHelper } from 'src/common/helpers/fetchHelpers';
import { KINOAFISHA_LOAD } from './constants';
import { Mapper } from './mappers';

const GetAfisha = async (): Promise<AfishaViewModel[]> => {
	const data: AfishaLoad<AfishaViewModel> = await fetchHelper.Get(KINOAFISHA_LOAD);
	const result: AfishaViewModel[] = data.result.map(Mapper.mapViewModel);
	return result;
};

export { GetAfisha };
