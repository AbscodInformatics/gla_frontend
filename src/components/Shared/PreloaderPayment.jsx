import React from 'react';
import { Box } from "@material-ui/core";

 
class PreloaderPayment extends React.Component {
    render(){
        return (
            <div className="preloader">
                <div className="loader"></div>
                <Box sx={{
                    color: "white", textAlign: "center"}}> Please wait while the payment has been  initialising...</Box>
            </div>
        );
    }
}
 
export default PreloaderPayment;