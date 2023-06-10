import React from 'react';
import MainBanner from '../Pricing/MainBanner';
// import PricingCardOne from '../Pricing/PricingCardOne';
import OtherFooter from '../Common/OtherFooter';
import Pricing from "../HomeTwo/Pricing";

 
class PricingOne extends React.Component {
    render(){
        return (
            <React.Fragment>
                <MainBanner />
                <Pricing />
                <OtherFooter />
            </React.Fragment>
        );
    }
}
 
export default PricingOne;