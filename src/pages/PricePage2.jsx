import React, { useState } from 'react';
import Baupro from '../components/Bayrpo/Baupro';
import Header2 from '../components/Header2/Header2';
import Modal from '../components/Modal/Modal'; // Импортируем модалку

const PricePage2 = () => {
  const [isModalVisible, setIsModalVisible] = useState(false); // Состояние для модалки

  const tariffsData = [
    {
      type: 'standart',
      title: 'Стандарт',
      discounts: ['', '', 'скидка', 'скидка'],
      prices: [
        { time: '1 час', default: 140, monWed: 110, morning: 90 },
        { time: '3 часа', default: 390, monWed: 310, morning: 270 },
        { time: '5 часов', default: 490, monWed: 390, morning: 340 },
        { time: '7 часов', default: 590, monWed: 470, morning: 390 },
        { time: 'Ночь', default: 690, monWed: 550, morning: '' },
        { time: 'День', default: 790, monWed: 630, morning: '' },
      ],
    },
    {
      type: 'standartplus',
      title: 'Стандарт +',
      discounts: ['', '', 'скидка', 'скидка'],
      prices: [
        { time: '1 час', default: 240, monWed: 190, morning: 160 },
        { time: '3 часа', default: 490, monWed: 390, morning: 340 },
        { time: '5 часов', default: 690, monWed: 550, morning: 480 },
        { time: '7 часов', default: 790, monWed: 630, morning: '' },
        { time: 'Ночь', default: 890, monWed: 710, morning: '' },
        { time: 'День', default: 990, monWed: 790, morning: '' },
      ],
    },
    {
      type: 'bootcamp',
      title: 'Boot Camp',
      discounts: ['', '', 'скидка', 'скидка'],
      prices: [
        { time: '1 час', default: 140, monWed: 110, morning: 90 },
        { time: '3 часа', default: 390, monWed: 310, morning: 270 },
        { time: '5 часов', default: 490, monWed: 390, morning: 340 },
        { time: '7 часов', default: 590, monWed: 470, morning: 390 },
        { time: 'Ночь', default: 690, monWed: 550, morning: '' },
        { time: 'День', default: 790, monWed: 630, morning: '' },
      ],
    },
  ];

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
      <Header2 color={"color2"} onScrollToBronya={handleOpenModal} /> {/* Передаем функцию открытия в Header2 */}
      <Baupro tariffs={tariffsData} />
      {isModalVisible && <Modal onClose={handleCloseModal} />} {/* Показываем модалку, если состояние true */}
    </>
  );
};

export default PricePage2;
