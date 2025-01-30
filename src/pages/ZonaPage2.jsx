import React, { useRef } from "react";
import Header2 from "../components/Header2/Header2";
import Camp from "../components/Camp/Camp";
import ZonaStart from "../components/ZonaStart/ZonaStart";
import Zona1 from "../components/Zona1/Zona1";
import Karta from "../components/Karta/Karta";
import Karta2 from "../components/Karta2/Karta2";
import Ps5 from "../components/Ps5/Ps5";

const ZonaPage2 = () => {
  const ps5Ref = useRef(null); // создаем ref для секции Ps5

  const onScrollToPs5 = () => {
    if (ps5Ref.current) {
      ps5Ref.current.scrollIntoView({ behavior: "smooth" }); // прокручиваем до секции Ps5
    }
  };

  return (
    <>
      <Header2 color={"color2"} onScrollToBronya={onScrollToPs5} />
      <Zona1 text={"СТАНДАРТ"} color={"pink"} />
      <ZonaStart text={"СТАНДАРТ+"} color={"blue"} />
      <Camp text={"BOOT CAMP"} color={"red"} />
      <Ps5 text={"Ps5"} color={"sin"} ps5Ref={ps5Ref} />
      <Karta2 />
    </>
  );
};

export default ZonaPage2;
