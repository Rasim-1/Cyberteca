import React from 'react'
import TarifCard from '../TarifCard/TarifCard'
import s from './TarifCamp.module.scss'

const TarifCamp = () => {
  return (
    <div className={s.tarifcamp}>
    <div className="container">
      <p className={s.title}>ТАРИФЫ И ЦЕНЫ</p>
      <div className={s.cards}>
        <div  data-aos="zoom-in"
            data-aos-delay="200">
        <TarifCard
          tarif={"Тариф «1 Час»"}
          accessTf={"Доступен 24/7"}
          img={"/tarif1.svg"}
          oldprice={"Стандартный тариф"}
          price={"140 ₽"}
          color={"color1"}
          border={"border13"}
        />
        </div>
        <div data-aos="zoom-in"
            data-aos-delay="400">
        <TarifCard
          tarif={"Тариф «3 Часа»"}
          accessTf={"Доступен 24/7"}
          img={"/tarif2.svg"}
          oldprice={"Выгода: Час = 130 ₽ "}
          price={"390 ₽"}
          color={"color13"}
          border={"border14"}
        />
        </div>
        <div data-aos="zoom-in"
            data-aos-delay="600"> 
        <TarifCard
          tarif={"Тариф «5 Часов»"}
          accessTf={"Доступен 24/7"}
          img={"/tarif3.svg"}
          oldprice={"Выгода: Час = 100 ₽ "}
          price={"490 ₽"}
          color={"color14"}
          border={"border15"}
        />
        </div>
        <div data-aos="zoom-in"
            data-aos-delay="800">
        <TarifCard
          tarif={"Тариф «7 Часов»"}
          accessTf={"Доступен 24/7"}
          img={"/tarif4.svg"}
          oldprice={"Выгода: Час = 85 ₽ "}
          price={"590 ₽"}
          color={"color15"}
          border={"border16"}
        />
        </div>
        <div data-aos="zoom-in"
            data-aos-delay="1000">
        <TarifCard
          tarif={"Тариф «Ночь»"}
          accessTf={"23:00 ‒ 10:00"}
          img={"/tarif5.svg"}
          oldprice={"Выгода: Час = 65 ₽ "}
          price={"690 ₽"}
          color={"color16"}
          border={"border17"}
        />
        </div>
        <div data-aos="zoom-in"
            data-aos-delay="1200">
        <TarifCard
          tarif={"Тариф «День»"}
          accessTf={"10:00 ‒ 23:00"}
          img={"/tarif6.svg"}
          oldprice={"Выгода: Час = 60 ₽ "}
          price={"790 ₽"}
          color={"color17"}
          border={"border18"}
          
        />
        </div>
      </div>
    </div>
  </div>
  )
}

export default TarifCamp