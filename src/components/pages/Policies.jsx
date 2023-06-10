import React from 'react';
import MainBanner from '../WhoShouldAttend/MainBanner';
// import PricingCardOne from '../Pricing/PricingCardOne';
import OtherFooter from '../Common/OtherFooter';
import MainPolicies from "../WhoShouldAttend/MainPolicies";

 
class Policies extends React.Component {
    render(){
        return (
            <React.Fragment>
                <MainBanner />
                <MainPolicies />
                <OtherFooter />
            </React.Fragment>
        );
    }
}
 
export default Policies;