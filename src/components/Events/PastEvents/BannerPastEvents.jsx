import React from 'react';
import { Link } from 'react-router-dom';

class BannerPastEvents extends React.Component {
    render(){
        return (
            <div className="page-title-area past-events-banner" >
                <div className="container" >
                
                    <h1>GLA Annual Meet Dubai Edition</h1>
                    <h5 style={{color:"white"}}>6ᵗʰ and 7ᵗʰ February 2023</h5>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li>Past Events</li>
                    </ul>
                </div>
            </div>
        );
    }
}
 
export default BannerPastEvents;