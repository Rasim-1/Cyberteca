import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import s from './Header1.module.scss';
import NavMenu from '../NavMenu/NavMenu';

const Header1 = ({ color, onScrollToBronya }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <NavMenu zona={'/zonapage'} strnica={'/stranica1page'} price={"/pricepage"} />
      <section className={s.header}>
        <div className="container">
          <div className={s.wrapper}>
            <div className={s.box} data-aos="fade-right" data-aos-delay="100">
              <div className={s.box__logo} data-aos="fade-up" data-aos-delay="200">
                <img className={s.logo} src="/logo.png" alt="Логотип" />
                <h1>
                  <span>КИБЕРТЕКА</span> НА ПРОФСОЮЗНОЙ
                </h1>
              </div>
              <div className={s.map} data-aos="zoom-in" data-aos-delay="300">
                <p>‣ Профсоюзная улица 22/10к1</p>
                <p>‣ Работаем круглосуточно!</p>
                <p>‣ 8 977 320 88 88</p>
              </div>
              <button
                className={`${s.btn} ${color}`}
                onClick={onScrollToBronya} 
                data-aos="fade-up"
                data-aos-delay="400"
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

export default Header1;
