import { AfishaViewModel } from "../Schedule/interfaces";

interface StateToProps {
    film: AfishaViewModel;
}

interface DispatchToProps {
    setFilm: (value: AfishaViewModel) => void;
}

interface FilmState {
    film: AfishaViewModel
}

interface RouteState {
    id: string;
}

export { StateToProps, DispatchToProps, FilmState,RouteState }