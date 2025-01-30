import React, { useEffect } from 'react'
import s from './Zone2.module.scss'
import AOS from "aos";
import "aos/dist/aos.css";
import Card from '../Card/Card'


const Zone = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
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

              <Card clasd={'card1'} comp={"Игровой ПК и перферия"} name={"Стандарт"} img={"/card5.png"} text={"Общая Зона"} href={"/zonasinglepage4"}/>
              </div>
              <div   data-aos="zoom-in-down" 
          data-aos-delay="500">

              <Card clasd={'card2'} img={"/card6.png"} comp={"Монитор больше + ПК мощнее"} name={"Стандарт+"} text={"Лучшие Места"}   href={'/zonasinglepage3'}/>
              </div>
              <div  data-aos="zoom-in-down" 
          data-aos-delay="800">
              <Card clasd={'card4'} comp={"На 5 или 10 мест + лучшие ПК  "} name={"BOOT CAMP"} img={"/card4.png"} text={" Отдельная Комната"} href={"/zonasinglepage5"} />
              </div>
<div data-aos="zoom-in-down" 
          data-aos-delay="1000">

              <Card clasd={'card3'} comp={"Подписка PS+ и 2 геймпада"} name={"ПРИСТАВКА"} img={"/card7.png" } text={"Диван + PS5"} href={"/zonasinglepage1"}/>
</div>
             
            

            
            </div>
        </div>
    </div>
   </div>
   
   
   
   </>
  )
}

export default Zone