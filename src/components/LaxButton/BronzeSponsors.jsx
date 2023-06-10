import React from 'react';
import ReactDOM from 'react-dom';
import lax from 'lax.js';
 
class BronzeSponsors extends React.Component {

    componentDidMount() {
        this.el = ReactDOM.findDOMNode(this)
        lax.addElement(this.el)
    }
    
    componentWillUnmount() {
        lax.removeElement(this.el)
    }
    
    render(){
        return (
            <h3 className="lax" data-lax-preset="driftLeft" style={{fontSize:"25px",fontWeight:700}}>Bronze Sponsors</h3>
        );
    }
}
 
export default BronzeSponsors;