import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Импорт стилей AOS
import s from "./Header2.module.scss";
import NavMenu from "../NavMenu/NavMenu";

const Header2 = ({ color, onScrollToBronya }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Длительность анимации
      once: true, // Анимация будет срабатывать только один раз
    });
  }, []);

  return (
    <>
      <NavMenu zona={"/zonapage2"} strnica={"/stranica2page"} price={"/pricepage2"} />
      <section className={s.header}>
        <div className="container">
          <div className={s.wrapper}>
            <div
              className={s.box}
              data-aos="fade-left"
              data-aos-delay="100" // Задержка 100мс
            >
              <div
                className={s.box__logo}
                data-aos="fade-up"
                data-aos-delay="200" // Задержка 200мс
              >
                <img className={s.logo} src="/logo.png" alt="" />
                <h1>
                  <span>КИБЕРТЕКА</span>
                  НА БАУМАНСКОЙ
                </h1>
              </div>
              <div
                className={s.map}
                data-aos="zoom-in"
                data-aos-delay="300" // Задержка 300мс
              >
                <p>‣ Спартаковская улица 21</p>
                <p>‣ Работаем круглосуточно!</p>
                <p>‣ 8 977 752 20 01</p>
              </div>
              <button
                className={`${s.btn} ${color}`}
                onClick={onScrollToBronya || (() => {})} // Вызываем переданный обработчик
                data-aos="fade-up"
                data-aos-delay="400" // Задержка 400мс
              >
                Забронировать!
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header2;
