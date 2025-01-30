import React from 'react'
import StandartInfo2 from '../components/StandartInfo2/StandartInfo2'
import ZonaStart from '../components/ZonaStart/ZonaStart'
import Booking from '../components/Booking/Booking'
import Header1 from '../components/Header1/Header1'

const ZonaSinglePage = () => {
  return (
 <>
 <Header1 color={"color1"}/>
 <ZonaStart  text={"СТАНДАРТ+"} color={"blue"}/>
 <StandartInfo2/>
 <Booking/>
 
 </>
  )
}

export default ZonaSinglePage