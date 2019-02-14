import * as React from 'react';

import { ActorState } from '../../Schedule/interfaces';
import { FULL_URL_KINO_AFISHA } from 'src/constants';
class Actor extends React.Component<ActorState>{
    mapViewModel = (link: string) => (link.replace('href="', `href="${FULL_URL_KINO_AFISHA}`));
    
    render() {
        return (
            <div>
                <h4>Актеры</h4>
                {this.props.href.map(x =>
                    <div key={x}>
                        <h5 dangerouslySetInnerHTML={{ __html: this.mapViewModel(x) }} />
                    </div>
                )}
            </div>
        )
    }
}
export { Actor }