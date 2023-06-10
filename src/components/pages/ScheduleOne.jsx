import React from 'react'
import MainBanner from '../schedule/MainBanner';
import EventSchedulesOne from '../schedule/EventSchedulesOne';
import OtherFooter from '../Common/OtherFooter';

class ScheduleOne extends React.Component {
    render(){
        return (
            <React.Fragment>
                <MainBanner />
                <EventSchedulesOne />
                <OtherFooter />
            </React.Fragment>
        );
    }
}
 
export default ScheduleOne;