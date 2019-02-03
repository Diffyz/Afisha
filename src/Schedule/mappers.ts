import { AfishaViewModel, Actor, Session } from './interfaces';

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

const mapActor = (actors: any): Actor => ({
	partUrl: actors.partUrl,
	name: actors.name,
});

const mapSession = (session: any): Session => ({
	id: session.id,
	name: session.name,
	address: session.address,
	url: session.url,
	session: session.session,
});
