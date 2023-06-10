import React from 'react';
import MainBannerIp from './MainBannerIp';
// import PricingCardOne from '../Pricing/PricingCardOne';
import OtherFooter from '../Common/OtherFooter';
import Pricing from "./Pricing";
import SponsorIP from './SponsorIP';

 
class PricingPage extends React.Component {
    render(){
        return (
            <React.Fragment>
                <MainBannerIp />
                <Pricing conf="IP" />
                <SponsorIP conf="IP"/>
                <OtherFooter />
            </React.Fragment>
        );
    }
}
 
export default PricingPage;
// https://gla-backend-0adz.onrender.com