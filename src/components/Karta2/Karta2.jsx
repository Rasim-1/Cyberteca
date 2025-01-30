import React from "react";
import s from "./Karta2.module.scss";

const Karta2 = () => {
  return (
    <>
      <div className={s.karta2}>
        <div className="container">
          <div className={s.wrapp}>
            <h2 className={s.h1}>КАРТА КЛУБА</h2>
            <div className={s.box}>
              <img src="/karta2.svg" alt="" />

              {/* <div>
                <img src="/PLUS-icon.svg" alt="icon" />
              </div> */}
            </div>
            <div className={s.card}>
  <div className={s.card1}>
    <div className={s.cardContent}>
      <img src="/plus-foto-5.jpg" alt="Card 1" />
      <p>Туалет</p>
    </div>
  </div>
  <div className={s.card2}>
    <div className={s.cardContent}>
      <img src="/plus-foto-6.jpg" alt="Card 2" />
      <p>Над 47 ПК</p>
    </div>
  </div>
  <div className={s.card3}>
    <div className={s.cardContent}>
      <img src="/plus-foto-7.jpg" alt="Card 3" />
      <p>У админки</p>
    </div>
  </div>
  <div className={s.card4}>
    <div className={s.cardContent}>
      <img src="/plus-foto-8.jpg" alt="Card 4" />
      <p>Между 32 и 23 ПК</p>
    </div>
  </div>
</div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Karta2;
