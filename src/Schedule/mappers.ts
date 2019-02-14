import { AfishaViewModel, ActorState, Session } from './interfaces';

export const Mapper = {
	mapViewModel: (response: any): AfishaViewModel => ({
		id: response.id,
		name: response.name,
		url: response.url,
		image: response.image,
		vote: response.vote,
		count_vote: response.count_vote,
		imdb: response.imdb,
		country: response.countries,
		actors: mapActor(response.actors),
		premier_ua: response.premier_ua,
		sessions: response.sessions.map(mapSession),
	}),
};

const mapActor = (actors: string): ActorState => ({
	href: actors != '' ? actors.split(',') : ['']
});

const mapSession = (session: any): Session => ({
	id: session.k_id,
	name: session.k_name,
	address: session.k_address,
	url: session.k_url,
	session: session.sessions,
});
