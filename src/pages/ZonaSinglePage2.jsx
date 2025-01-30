import React from 'react'
import Zona1 from '../components/Zona1/Zona1'
import StanfartPlus2 from '../components/StanfartPlus2/StanfartPlus2'
import Booking from '../components/Booking/Booking'
import Header1 from '../components/Header1/Header1'

const ZonaSinglePage2 = () => {
  return (
    <>
     <Header1 color={"color1"}/>
    <Zona1 text={"СТАНДАРТ"} color={"pink"}/>
  <StanfartPlus2/>
    <Booking/>
    
    
    
    
    </>
  )
}

export default ZonaSinglePage2