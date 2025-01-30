import React, { useEffect } from 'react'
import s from './Zone.module.scss'
import AOS from "aos";
import "aos/dist/aos.css";
import Card from '../Card/Card'
import Ps5 from '../Ps5/Ps5';

const Zone = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,     
    });
  }, []);
  return (
   <>
   <div className={s.zone}>
    <div className="container">
        <div className={s.wrapp}>
            <h2>разные зоны <span>с разными условиями</span></h2>
            <div className={s.cards} >
              <div  data-aos="zoom-in-down" 
          data-aos-delay="200">

              <Card clasd={'card1'} comp={"Игровой ПК и перферия"} name={"Стандарт"} img={"/card1.png"} text={"Общая Зона"} href={"/zonasinglepage2"}/>
              </div>
              <div   data-aos="zoom-in-down" 
          data-aos-delay="500">

              <Card clasd={'card2'} img={"/card2.png"} comp={"Монитор больше + ПК мощнее"} name={"Стандарт+"} text={"Лучшие Места"}   href={'/zonasinglepage'}/>
              </div>
<div data-aos="zoom-in-down" 
          data-aos-delay="1000">

              <Card clasd={'card3'} comp={"Подписка PS+ и 2 геймпада"} name={"ПРИСТАВКА"} img={"/card3.png" } text={"Диван + PS5"} href={"/zonasinglepage1"}/>
</div>
             
        </div>
    </div>
   </div>
   
   
   </div>
   </>
  )
}

export default Zone