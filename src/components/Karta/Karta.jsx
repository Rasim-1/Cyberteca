import React from "react";
import s from "./Karta.module.scss";

const Karta = () => {
  return (
    <>
      <div className={s.karta}>
        <div className="container">
          <div className={s.wrapp}>
            <h1 className={s.h1}>КАРТА КЛУБА</h1>
            <div className={s.box}>
              <img src="/fotoo.svg" alt="" />

              {/* <div>
                <img src="/PLUS-icon.svg" alt="icon" />
              </div> */}
            </div>
            <div className={s.card}>
  <div className={s.card1}>
    <div className={s.cardContent}>
      <img src="/plus-foto-1.jpg" alt="Card 1" />
      <p>У админки</p>
    </div>
  </div>
  <div className={s.card2}>
    <div className={s.cardContent}>
      <img src="/plus-foto-2.jpg" alt="Card 2" />
      <p>Рядом с 5 и 8 ПК</p>
    </div>
  </div>
  <div className={s.card3}>
    <div className={s.cardContent}>
      <img src="/plus-foto-3.jpg" alt="Card 3" />
      <p>Над 38 ПК</p>
    </div>
  </div>
  <div className={s.card4}>
    <div className={s.cardContent}>
      <img src="/plus-foto-4.jpg" alt="Card 4" />
      <p>У PS</p>
    </div>
  </div>
</div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Karta;
