import * as React from 'react';

import { withRouter, RouteComponentProps } from 'react-router';
import { Button } from 'src/common/buttons/Button';
import { SCHEDULE_URI } from 'src/constants';

import './not-found.css'
class NotFound extends React.Component<RouteComponentProps> {
    render() {
        return (
            <div className='not_found'>
                <div className='button'>
                    <Button value='Вернуться на главную' onSubmit={() => this.props.history.push(SCHEDULE_URI)}> </Button>
                </div>
            </div>
        )
    }
}
export default withRouter(NotFound);