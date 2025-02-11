import React, { useRef } from 'react';
import Header1 from '../components/Header1/Header1';
import Zone from '../components/Zone/Zone';
import Slider from '../components/Slider/Slider';
import Bronya from '../components/Bronya/Bronya';
import MyWork from '../components/MyWork/MyWork';

const Stranica1Page = () => {
  const bronyaRef = useRef(null);

  const onScrollToBronya = () => {
    if (bronyaRef.current) {
      bronyaRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Header1 color={'color1'} onScrollToBronya={onScrollToBronya} />
      <Zone />
      <Slider />
      <Bronya ref={bronyaRef} color={'color1'} />
      <MyWork
        metro={"Профсоюзная 🟠"}
        time={'4 минуты пешком'}
        metro2={"Академическая 🔴 "}
        time2={'5 минуты пешком'}
        tel={"+7 977 320 88 88"}
        adres={'Профсоюзная улица 22/10 к1 '}
        color={'color1'}
        karta={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d578.8352527654304!2d37.56501737064873!3d55.68155043393088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54d585cca796b%3A0xb1d704f5fdf41978!2z0JrQuNCx0LXRgNGC0LXQutCwIHwg0JrQvtC80L_RjNGO0YLQtdGA0L3Ri9C5INC60LvRg9CxINCf0YDQvtGE0YHQvtGO0LfQvdCw0Y8!5e0!3m2!1sen!2s!4v1734094158127!5m2!1sen!2s "}
      />
    
    </>
  );
};

export default Stranica1Page;
