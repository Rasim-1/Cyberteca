import React from "react";
import s from "./TatifCard.module.scss";

const TarifCard = ({
  price,
  color,
  oldprice,
  tarif,
  accessTf,
  img,
  border,
  border2
}) => {
  return (
    <>
      <div className={s.card}>
        <div className={`${s.box} ${border} ${border2}`}>
          <p className={s.text1}>{tarif}</p>
          <p className={s.text2}>{accessTf}</p>
          <img src={img} alt="" />
          <p className={`${s.text3} ${color}`}>{oldprice}</p>
          <p className={s.text4}>{price}</p>
        </div>
      </div>
    </>
  );
};

export default TarifCard;
