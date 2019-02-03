interface AfishaViewModel {
	id: string;
	name: string;
	url: string;
	image: string;
	vote: string;
	count_vote: string;
	imdb: string;
	country: string;
	actors: Actor;
	premier_ua: string;
	sessions: Session;
}

interface Session {
	id: string;
	name: string;
	address: string;
	url: string;
	session: string;
}

interface Actor {
	partUrl: string;
	name: string;
}

interface AfishaLoad<T> {
	result: T[];
}

interface StateToProps {
	result: AfishaViewModel[];
}

interface DispatchToProps {
	setKinoAfishaValues: (value: AfishaViewModel[]) => void;
	clear: () => void;
}

export { AfishaViewModel, Session, Actor, AfishaLoad, StateToProps, DispatchToProps };
