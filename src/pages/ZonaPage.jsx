import React, { useRef } from "react";
import Header1 from "../components/Header1/Header1";
import ZonaStart from "../components/ZonaStart/ZonaStart";
import Zona1 from "../components/Zona1/Zona1";
import Karta from "../components/Karta/Karta";
import Ps5 from "../components/Ps5/Ps5";

const ZonaPage = () => {
  const ps5Ref = useRef(null); // создаем ref для секции Ps5

  // Функция для прокрутки до секции Ps5
  const onScrollToPs5 = () => {
    if (ps5Ref.current) {
      ps5Ref.current.scrollIntoView({ behavior: "smooth" }); // прокрутка до секции
    }
  };

  return (
    <>
      <Header1 color={"color1"} onScrollToBronya={onScrollToPs5} />
      <ZonaStart text={"СТАНДАРТ+"} color={"blue"} />
      <Zona1 text={"СТАНДАРТ"} color={"pink"} />
      <Ps5 text={"Ps5"} color={"sin"} ps5Ref={ps5Ref} />
      <Karta />
    </>
  );
};

export default ZonaPage;
