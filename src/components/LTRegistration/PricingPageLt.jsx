import React from 'react';
import MainBannerLt from './MainBannerLt';
// import PricingCardOne from '../Pricing/PricingCardOne';
import OtherFooter from '../Common/OtherFooter';
import PricingLt from "./PricingLt";
import SponsorsLt from './SponsorLt';
import Sponsor from '../pages/Sponsor';

 
class PricingPageLt extends React.Component {
    render(){
        return (
            <React.Fragment>
                <MainBannerLt />
                <PricingLt conf="Legal" />
                <SponsorsLt conf="Legal" />
                {/* <Sponsor/> */}
                <OtherFooter />
            </React.Fragment>
        );
    }
}
 
export default PricingPageLt;
// https://gla-backend-0adz.onrender.com