import React from 'react';
import { BiArrowFromLeft } from "react-icons/bi"; 
class PricingOne extends React.Component {
    render(){
        return (
            <section className="pricing-area ptb-120 bg-image">
          
    <div class="dark:white">
      <section class="mx-auto container py-20">
        <div class="flex justify-center items-center flex-col">
          <div class="lg:text-6xl md:text-5xl text-4xl font-black leading-10 text-center text-gray-800 dark:text-white">
                               <h1>Who Should Attend</h1>
          </div>
          <div class="pt-24 grid lg:grid-cols-3 md:grid-cols-2 justify-center items-center xl:gap-y-16 gap-y-20 gap-x-16 lg:gap-x-20 xl:gap-x-0 lg:px-10 xl:px-0">
            <div class="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
           
              <div class="text-gray-800 dark:text-white text-1.5xl font-semibold text-center d-flex">
                <BiArrowFromLeft style={{color:"black", fontSize:"35px",paddingRight:"5px"}} /> <h5>GCs, Corporate Counsels & In-house Counsels</h5>
              </div>
            
            </div>
            <div class="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col ">
            
              <div class="text-gray-800 dark:text-white text-1.5xl font-semibold text-center d-flex ">
                              <BiArrowFromLeft style={{color:"black", fontSize:"25px",paddingRight:"5px"}} />  <h5>Head of Litigation/IP Litigation</h5>
              </div>
              
            </div>
            <div class="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
              <div class="text-gray-800 dark:text-white text-1.5xl font-semibold text-center d-flex">
                                 <BiArrowFromLeft style={{color:"black", fontSize:"25px",paddingRight:"5px"}} /> <h5>ADR Practitioners, Mediators and Arbitrators</h5>
              </div>
            
            </div>
            <div class="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
              
              <div class="text-gray-800 dark:text-white text-1.5xl font-semibold text-center d-flex">
                                 <BiArrowFromLeft style={{color:"black", fontSize:"35px",paddingRight:"5px"}} /> <h5>Online Dispute Resolution Service Providers & Pioneers</h5>
              </div>
             
            </div>
            <div class="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
             
              <div class="text-gray-800 dark:text-white text-1.5xl font-semibold text-center d-flex">
                              <BiArrowFromLeft style={{color:"black", fontSize:"35px",paddingRight:"5px"}} />   <h5>CEOs / Managing & Senior Partners of Law firms</h5>
              </div>
             
            </div>
            <div class="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
            
              <div class="text-gray-800 dark:text-white text-1.5xl font-semibold text-center d-flex">
                                 <BiArrowFromLeft style={{color:"black", fontSize:"30px",paddingRight:"5px"}} /> <h5>LegalTech experts and Developers</h5>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  
            </section>
        );
    }
}
 
export default PricingOne;