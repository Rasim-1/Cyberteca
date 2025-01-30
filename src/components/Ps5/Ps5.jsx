import React from "react";
import s from "./Ps5.module.scss";
import TarifCard from "../TarifCard/TarifCard";
import Bron from "../Bron/Bron";

const Ps5 = ({ text, color, ps5Ref }) => {
  return (
    <div className={s.ps5} ref={ps5Ref}>
      <div className="container">
        <div className={s.wrapper}>
          <div className={s.boxs}>
            <h1 className={s.text}>
              ЗОНА <span className={color}>{text}</span>
            </h1>
            <p className={s.title}>ТАРИФЫ И ЦЕНЫ</p>
            <div className={s.cards}>
              <div data-aos="zoom-in" data-aos-delay="200">
                <TarifCard
                  tarif={"Тариф «1 Час»"}
                  accessTf={"Доступен 24/7"}
                  img={"/tarif1.svg"}
                  oldprice={"Стандартный тариф"}
                  price={"140 ₽"}
                  border={"border22"}
                />
              </div>
              <div data-aos="zoom-in" data-aos-delay="400">
                <TarifCard
                  tarif={"Тариф «3 Часа»"}
                  accessTf={"Доступен 24/7"}
                  img={"/tarif2.svg"}
                  oldprice={"Выгода: Час = 130 ₽ "}
                  price={"390 ₽"}
                  border={"border20"}
                />
              </div>
              <div data-aos="zoom-in" data-aos-delay="600">
                <TarifCard
                  tarif={"Тариф «5 Часов»"}
                  accessTf={"Доступен 24/7"}
                  img={"/tarif3.svg"}
                  oldprice={"Выгода: Час = 100 ₽ "}
                  price={"490 ₽"}
                  border={"border21"}
                />
              </div>
            </div>
          </div>
          <Bron color={"color2"} />
        </div>
      </div>
    </div>
  );
};

export default Ps5;
