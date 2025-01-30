import React, { useState } from 'react';
import s from './Choice.module.scss';
import { Link } from 'react-router-dom';
import Modal from '../Modal/Modal'; // Импортируем модальное окно

const Choice = ({ onChoice }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={s.choice}>
        {/* Фон-видео */}
        <video className={`${s.heroVideo} desktop`} autoPlay loop muted>
          <source src="/video.mp4" type="video/mp4" height={'100dvh'} />
          Ваш браузер не поддерживает видео.
        </video>

        {/* Контент поверх видео */}
        <div className={s.wrapper}>
          <div className={s.info}>
            <div className={s.info__box}>
              <img src="/logo.png" alt="Логотип" />
              <div>
                <h1>КИБЕРТЕКА</h1>
                <p>Компьютерный клуб для тебя и твоих друзей</p>
              </div>
            </div>
            <p className={s.text}>
              Выбираешь клуб для того чтобы провести вечер? Ты как раз вовремя, потому что в июле мы обновили видеокарты до 30 серии!
            </p>
            <button className={s.btn} onClick={handleModalOpen}>Забронировать!</button>
          </div>

          <div className={s.box}>
            <nav className={s.profsoiz}>
              <h2>
                <span>КИБЕРТЕКА </span>
                НА ПРОФСОЮЗНОЙ
              </h2>
              <button onClick={() => onChoice('/stranica1page')} className={s.scrol1}>Подробнее →</button>
            </nav>
            <nav className={s.baumsk}>
              <h2>
                <span>КИБЕРТЕКА </span>
                НА БАУМАНСКОЙ
              </h2>
              <button onClick={() => onChoice('/stranica2page')} className={s.scrol2}>Подробнее →</button>
            </nav>
          </div>
        </div>
      </div>

      {/* Модальное окно */}
      {isModalOpen && <Modal onClose={handleModalClose} />}
    </>
  );
};

export default Choice;
