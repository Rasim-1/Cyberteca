import React, { useState } from 'react';
import s from './MyWork.module.scss';
import Modal from '../Modal/Modal';

const MyWork = ({ metro, metro2, time, time2, adres, tel, karta, color }) => {
  const [isModalVisible, setIsModalVisible] = useState(false); // Состояние для модалки

  // Функция для закрытия модалки
  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  // Функция для открытия модалки
  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  return (
    <>
      <div className={s.maps}>
        <div className="container">
          <div className={s.wrap}>
            <div className={s.map}>
              <h3>Как нас найти?</h3>
              <div className={s.metro}>
                <div>
                  <p>
                    Метро {metro}
                    <span> {time}</span>
                  </p>
                  <p>
                    Метро {metro2}
                    <span>{time2}</span>
                  </p>
                </div>

                <div>
                  <p>
                    Адрес: <span>{adres}</span>
                  </p>
                  <p>
                    Телефон: <span>{tel}</span>
                    <a href="https://t.me/+kOeFEoBdi6AyYTcy" target="_blank" rel="noopener noreferrer">
                      <img src="tg.png" width={'30'} alt="Telegram" />
                    </a>
                    <a href="https://chat.whatsapp.com/B7wpfxc2I7PFXSi9kLorxD" target="_blank" rel="noopener noreferrer">
                      <img src="whatsap.png" alt="WhatsApp" width={'30'} />
                    </a>
                  </p>
                </div>

                <div>
                  <p className={s.text}>
                    По вопросам сотрудничества{' '}
                    <span>Коммерческие предложения можно направить в группу BK или в Телеграм</span>
                  </p>
                </div>

                <div className={s.btn}>
                  <button className={color} onClick={handleOpenModal}>
                    Забронировать!
                  </button>
                  <a href="https://vk.me/join/RoYsq1ivPZlrJOwawWcVpCjl5V9GClnRDQc=" target="_blank" rel="noopener noreferrer">
                    <img src="vk.png" width={'60'} alt="VK" />
                  </a>
                </div>
              </div>
            </div>

            {/* Контейнер с картой */}
            <div className={s.karta}>
              <iframe
                className={s.mapIframe}
                width="100%"
                height="400px"
                src={karta} // Тут можно передать кастомизированный URL карты
                frameBorder="0"
                allowFullScreen
                title="Карта"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Модалка появляется, если состояние isModalVisible = true */}
      {isModalVisible && <Modal onClose={handleCloseModal} />}
    </>
  );
};

export default MyWork;
