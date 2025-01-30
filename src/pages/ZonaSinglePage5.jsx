import React from 'react'
import BootCamp from '../components/BootCampInfo/BootCampInfo'
import BootCampInfo from '../components/BootCampInfo/BootCampInfo'
import Camp from '../components/Camp/Camp'
import Booking from '../components/Booking/Booking'
import Header2 from '../components/Header2/Header2'

const ZonaSinglePage5 = () => {
  return (
 <>
  <Header2 color={"color2"}/>
 <Camp  text={"BOOT CAMP"} color={"red"}/>
 <BootCampInfo/>
 <Booking/>
 
 
 
 </>
  )
}

export default ZonaSinglePage5