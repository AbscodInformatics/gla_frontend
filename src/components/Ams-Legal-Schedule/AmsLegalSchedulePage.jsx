import React from 'react'
import OtherFooter from '../Common/OtherFooter'
import MainBanner from './MainBanner'
import ScheduleAmsIp from './ScheduleAmsLegal'
import AgendaLitigationAMS from './AgendaLitigationAMS'
const AmsLegalSchedulePage = () => {
  return (
      <div>
          <MainBanner />
          <AgendaLitigationAMS/>
          {/* <ScheduleAmsIp /> */}
          <OtherFooter/>
    </div>
  )
}

export default AmsLegalSchedulePage