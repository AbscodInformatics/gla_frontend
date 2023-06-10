import React from 'react';
import { Link } from 'react-router-dom';

class MainBanner extends React.Component {
    render(){
        return (
            <div className="page-title-area item-bg1" style={{height:"500px"}}>
                <div className="container">
                      <div style={{display:"flex",justifyContent:"center",marginBottom:"5px"}}>  <div style={{fontSize:"20px",color:"white" ,fontWeight:"bold",display:"flex",alignItems:"center"}}>In association  with Effectual Services</div> <span className="ml-2" onClick={()=>window.open("https://www.effectualservices.com/")}><img style={{width:"120px",cursor:"pointer"}} src="images/effectual_logo.png" alt="effectual logo" /></span></div>
                    <h1>Schedule</h1>
                    <span>Register Now !</span>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li>Schedule</li>
                    </ul>
                </div>
            </div>
        );
    }
}
 
export default MainBanner;