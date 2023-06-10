import React from 'react';
import { Link } from 'react-router-dom';

class MainBanner extends React.Component {
    render(){
        return (
            <div className="page-title-area item-bg5" style={{height:"300px"}}>
                <div className="container">
                     
                    <h1>{this.props.heading}</h1>
                    <span> JOIN NOW AND LISTEN TO THE EVENT SPEAKERS</span>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li>{ this.props.lastLine}</li>
                    </ul>
                </div>
            </div>
        );
    }
}
 
export default MainBanner;