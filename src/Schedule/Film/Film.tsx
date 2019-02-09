import * as React from 'react';
import { GetAfisha } from '../actions';
import { AfishaViewModel } from '../interfaces';

class Film extends React.Component<any> {
    componentDidMount = async (): Promise<void> => {
        if (!this.props.location.film) {
            const url: string = window.location.pathname;
            const viewModels: AfishaViewModel[] = await GetAfisha();
            const id: string = url.substring(url.lastIndexOf('/') + 1);
            const viewModel = viewModels.find(x => x.id === id);
            if (viewModel) {
                this.props.location.film = viewModel;
            }
        }
    }
    render() {
        console.log(this.props.location.film)
        return (
            <div>3333</div>
        )
    }
}

export { Film }