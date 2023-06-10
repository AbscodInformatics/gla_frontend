import React from 'react';
import { Link } from 'react-router-dom';

class MainBanner extends React.Component {
    render(){
        return (
            <div className="page-title-area schedule-ams-ip-banner" style={{height:"300px"}}>
                <div className="container">
                    <h1>Schedule For GLA Dubai Litigation Event</h1>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li>Agenda</li>
                    </ul>
                    <span>Register Now !</span>

                </div>
            </div>
        );
    }
}
 
export default MainBanner;