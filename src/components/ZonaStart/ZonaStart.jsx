import React, { useEffect } from 'react'
import s from './ZonaStart.module.scss'
import AOS from "aos";
import "aos/dist/aos.css";
import Tarif2 from '../Tarif2/Tarif2';

const ZonaStart = ({color, text}) => {

  
  useEffect(() => {
    AOS.init({
      duration: 1000, // Длительность анимации в миллисекундах
      once: true,     // Анимация срабатывает только один раз при скролле
    });
  }, []);

  return (
    <>
    <div className={s.zonastart}>
      <div className="container">
        <h1 className={s.wrap}>ЗОНА <span className={color}>{text}</span></h1>
        <p className={s.har}>ХАРАКТЕРИСТИКИ</p>
        <div className={s.cards}>
          <div className={s.card}
          data-aos="zoom-in-down" 
          data-aos-delay="200">
          
            <div className={s.box}>

              <p className={s.text1}>процессор</p>
              <p className={s.text2}>Intel Core i5 - 10600K</p>
              <img src="/card1.svg" alt="" />
            </div>

          </div>
          <div className={s.card}
          data-aos="zoom-in-down" 
          data-aos-delay="400">
            <div className={s.box}>
              <p className={s.text1}>видеокарта</p>
              <p className={s.text2}>GeForce RTX 3060 ti</p>
              <img src="/card2.svg" alt="" />
            </div>
          </div>
          <div className={s.card}
          data-aos="zoom-in-down" 
          data-aos-delay="600">
            <div className={s.box}>
              <p className={s.text1}>память</p>
              <p className={s.text2}>DDR4 16GB</p>
              <img src="/card3.svg" alt="" />
            </div>
          </div>
          <div className={s.card}
          data-aos="zoom-in-down" 
          data-aos-delay="800">
            <div className={s.box}>
              <p className={s.text1}>накопитель</p>
              <p className={s.text2}>NVMe SSD</p>
              <img src="/card4.svg" alt="" />
            </div>
          </div>
          <div className={s.card}
          data-aos="zoom-in-down" 
          data-aos-delay="1000">
            <div className={s.box}>
              <p className={s.text1}>монитор</p>
              <p className={s.text2}>32" 144Hz</p>
              <img src="/card5.svg" alt="" />
            </div>
          </div>
          <div className={s.card}
          data-aos="zoom-in-down" 
          data-aos-delay="1200">
            <div className={s.box}>
              <p className={s.text1}>клавиатура</p>
              <p className={s.text2}>HyperX Alloy FPS PRO</p>
              <img className={s.image} src="/card6.svg" alt="" />
            </div>
          </div>
          <div className={s.card}
          data-aos="zoom-in-down" 
          data-aos-delay="1400">
            <div className={s.box}>
              <p className={s.text1}>мышка</p>
              <p className={s.text2}>SteelSeries Rival 310</p>
              <img src="/card7.svg" alt="" />
            </div>
          </div>
          <div className={s.card}
          data-aos="zoom-in-down" 
          data-aos-delay="1600">
            <div className={s.box}>
              <p className={s.text1}>наушники</p>
              <p className={s.text2}>HyperX Cloud Alpha</p>
              <img src="/card8.svg" alt="" />
            </div>
          </div>
        </div>

        <Tarif2/>
  
        
      </div>
    </div>
 
 
 
 </>
  )
}

export default ZonaStart