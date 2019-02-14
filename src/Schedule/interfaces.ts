interface AfishaViewModel {
	id: string;
	name: string;
	url: string;
	image: string;
	vote: string;
	count_vote: string;
	imdb: string;
	country: string;
	actors: ActorState;
	premier_ua: string;
	sessions: Session[];
}

interface Session {
	id: string;
	name: string;
	address: string;
	url: string;
	session: string;
}

interface ActorState {
	href: string[]
}

interface AfishaLoad<T> {
	result: T[];
}

interface FilmViewModel {
	film: AfishaViewModel
}

interface StateToProps {
	result: AfishaViewModel[];
}

interface DispatchToProps {
	setKinoAfishaValues: (value: AfishaViewModel[]) => void;
}

export { AfishaViewModel, Session, ActorState, AfishaLoad, StateToProps, DispatchToProps, FilmViewModel };
