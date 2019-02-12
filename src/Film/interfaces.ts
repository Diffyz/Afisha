import { AfishaViewModel } from 'src/Schedule/interfaces';

interface StateToProps {
    film: AfishaViewModel;
}

interface DispatchToProps {
    setFilm: (value: AfishaViewModel) => void;
}

interface FilmState {
    film: AfishaViewModel
}
export { StateToProps, DispatchToProps, FilmState }