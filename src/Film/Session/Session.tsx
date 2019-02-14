import * as React from 'react';

import { SessionState } from './interfaces';
import { Session as SessionInterface } from 'src/Schedule/interfaces';

import './session.css';
class Session extends React.Component<SessionState> {
    getOnlyThreeCinemas = (existingSessions: SessionInterface[]): SessionInterface[] => {
        return existingSessions.length < 3
            ? existingSessions
            : existingSessions.slice(0, 3);
    }

    getSessions = (sessions: SessionInterface[]) => {
        const existingSessions: SessionInterface[] = sessions.filter(x => (x.name && x.name !== '' && x.session && x.session !== ''));
        const onlyThreeCinemas: SessionInterface[] = this.getOnlyThreeCinemas(existingSessions);
        if (onlyThreeCinemas.length === 0) {
            return <div></div>;
        }
        return <span>
            {onlyThreeCinemas.findIndex(x => x.session != '') >= 1 ? <h4>Кинотеатр</h4> : <h4>Кинотеатры</h4>}
            <div className='cinemas'>
                {onlyThreeCinemas.map(x =>
                    <span className='session' key={x.name}>
                        <h5>{x.name}</h5>
                        <span dangerouslySetInnerHTML={{ __html: x.session }} />
                    </span>
                )}
            </div>
        </span>
    }

    render() {
        return (
            <div className='sessions'>
                <span>
                    {this.getSessions(this.props.sessions)}
                </span>
            </div>
        )
    }
}

export { Session }