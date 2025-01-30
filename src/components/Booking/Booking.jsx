import React from "react";
import s from "./Booking.module.scss";
import Bron from "../Bron/Bron";

const Booking = ({ bookRef }) => {
  return (
    <div className={s.book} ref={bookRef}>
      <div className="container">
        <div className={s.cards}>
          <div className={s.promokod}>
            <input type="text" placeholder="КИБЕРФИКСАЦИЯ ИЛИ ПРОМОКОД" />
          </div>
          <Bron color={"color2"} />
        </div>
      </div>
    </div>
  );
};

export default Booking;
