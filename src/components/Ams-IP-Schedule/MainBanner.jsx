import React from 'react';
import { Link } from 'react-router-dom';

class MainBanner extends React.Component {
    render(){
        return (
            <div className="page-title-area item-event-ams-ip" style={{height:"300px"}}>
                <div className="container">
                    <h1>Schedule For GLA Amsterdam IP Event</h1>
                    <span>Register Now !</span>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li>Agenda</li>
                    </ul>
                </div>
            </div>
        );
    }
}
 
export default MainBanner;