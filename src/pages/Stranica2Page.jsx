import React, { useRef } from 'react';
import Header2 from '../components/Header2/Header2';
import Zone from '../components/Zone2/Zone2';
import Slider2 from '../components/Slider2/Slider2';
import Bronya2 from '../components/Bronya2/Bronya2';
import MyWork from '../components/MyWork/MyWork';
import Kot from '../components/Kot/Kot';

const Stranica2Page = () => {
  const bronya2Ref = useRef(null);

  const onScrollToBronya = () => {
    if (bronya2Ref.current) {
      bronya2Ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Header2 color={'color2'} onScrollToBronya={onScrollToBronya} />
      <Zone />
      <Slider2 />
      <Bronya2 ref={bronya2Ref} color={'color2'} />
      <MyWork
        metro={"Бауманская  🔵"}
        color={'color2'}
        time={'3 минуты пешком'}
        metro2={"Красноселькая 🔴"}
        time2={'14 минуты пешком'}
        tel={"+7 977 752 20 01"}
        adres={'Спартаковская, 21'}
        karta={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d71897.54593323919!2d37.539138203694264!3d55.72725717684661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b535345daf4903%3A0x865a36445966a25a!2z0JrQuNCx0LXRgNGC0LXQutCwIHwg0JrQvtC80L_RjNGO0YLQtdGA0L3Ri9C5INC60LvRg9CxINCR0LDRg9C80LDQvdGB0LrQsNGP!5e0!3m2!1sen!2s!4v1734094860645!5m2!1sen!2s"}
     />
    </>
  );
};

export default Stranica2Page;
