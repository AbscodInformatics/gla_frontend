import React from 'react'
import WhyUs from '../Common/WhyUs'
import About from '../HomeTwo/About'
import MainBanner from '../HomeTwo/MainBanner'
import Motive from "../HomeThree/WhyUs"
import AboutFooter from '../Common/AboutFooter'
import Leadership from '../HomeTwo/Leadership'
import CountDown from '../HomeTwo/CountDown'

const Aboutus = () => {
  return (
      <div>
      <MainBanner />
      <CountDown/>
          <About />
          <Leadership/>
          <Motive/>
          <AboutFooter/>
    </div>
  )
}

export default Aboutus