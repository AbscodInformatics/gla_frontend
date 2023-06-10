import React from 'react';
import { Link } from 'react-router-dom';

class MainBanner extends React.Component {
    render(){
        return (
            <div className="page-title-area banner-privacy-policy" style={{height:"300px"}}>
                <div className="container">
                    <h1>Privacy Policy </h1>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li>privacy-policies</li>
                    </ul>
                </div>
            </div>
        );
    }
}
 
export default MainBanner;