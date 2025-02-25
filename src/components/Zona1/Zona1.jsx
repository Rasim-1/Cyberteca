import React, { useEffect } from 'react'
import Tarif from '../Tarif/Tarif'
import s from './Zona1.module.scss'
import AOS from "aos";
import "aos/dist/aos.css";

const Zona1 = ({color, text}) => {

  
  useEffect(() => {
    AOS.init({
      duration: 1000, // Длительность анимации в миллисекундах
      once: true,     // Анимация срабатывает только один раз при скролле
    });
  }, []);

  return (
    <>
    <div className={s.zona1}>
      <div className="container">
        <h1 className={s.wrap}>ЗОНА <span className={color}>{text}</span></h1>
        <p className={s.har}>ХАРАКТЕРИСТИКИ</p>
        <div className={s.cards}>
          <div className={s.card}
          data-aos="zoom-in-down" 
          data-aos-delay="200">
          
            <div className={s.box}>

              <p className={s.text1}>процессор</p>
              <p className={s.text2}>AMD Ryzen 7 2700X</p>
              <img src="/card1.svg" alt="" />
            </div>

          </div>
          <div className={s.card}
          data-aos="zoom-in-down" 
          data-aos-delay="400">
            <div className={s.box}>
              <p className={s.text1}>видеокарта</p>
              <p className={s.text2}>GeForce GTX 1080</p>
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
              <p className={s.text2}>27" 144Hz</p>
              <img src="/card5.svg" alt="" />
            </div>
          </div>
          <div className={s.card}
          data-aos="zoom-in-down" 
          data-aos-delay="1200">
            <div className={s.box}>
              <p className={s.text1}>клавиатура</p>
              <p className={s.text2}>Gamdias Hermes E2</p>
              <img className={s.image} src="/card6.svg" alt="" />
            </div>
          </div>
          <div className={s.card}
          data-aos="zoom-in-down" 
          data-aos-delay="1400">
            <div className={s.box}>
              <p className={s.text1}>мышка</p>
              <p className={s.text2}>Logitech G403</p>
              <img src="/card7.svg" alt="" />
            </div>
          </div>
          <div className={s.card}
          data-aos="zoom-in-down" 
          data-aos-delay="1600">
            <div className={s.box}>
              <p className={s.text1}>наушники</p>
              <p className={s.text2}>Corsair HS50</p>
              <img src="/card8.svg" alt="" />
            </div>
          </div>
        </div>

        <Tarif/>
  
        
      </div>
    </div>
 
 
 
 </>
  )
}

export default Zona1