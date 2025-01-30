import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Импорт стилей AOS
import s from './NavMenu.module.scss';
import { NavLink } from 'react-router-dom';

const NavMenu = ({ zona = '/zonapage', strnica = '/', price = '/pricepage'}) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className={s.wrapp}>
      <nav className={s.menu}>
        <NavLink
          to={strnica}
          className={({ isActive }) => (isActive ? s.active : '')}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Главная
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? s.active : '')}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Меню
        </NavLink>
        <NavLink
          to={zona}
          className={({ isActive }) => (isActive ? s.active : '')}
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Зона
        </NavLink>
        <NavLink
          to={price}
          className={({ isActive }) => (isActive ? s.active : '')}
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Цена
        </NavLink>
        <NavLink
          to="/marketpage"
          className={({ isActive }) => (isActive ? s.active : '')}
          data-aos="fade-up"
          data-aos-delay="500"
        >
          Магазин
        </NavLink>
      </nav>
    </div>
  );
};

export default NavMenu;
