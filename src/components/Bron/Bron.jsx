import React, { useState } from 'react';
import s from './Bron.module.scss';

const Bron = ({ color }) => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    guests: '',
    phone: '',
    wishes: '',
  });

  const [successMessage, setSuccessMessage] = useState(false); // Добавляем состояние для успешного сообщения

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'guests' && value < 0) {
      setFormData({ ...formData, [name]: 0 });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const botToken = '7186250261:AAFhXzDCStlXVf-rp34FKCC2k0c6H8cHQuM'; // Замените на ваш токен
    const chatId = '-4671583313'; 
    const message = `
      Имя: ${formData.name}
      Дата: ${formData.date}
      Время: ${formData.time}
      Количество гостей: ${formData.guests}
      Телефон: ${formData.phone}
      Пожелания: ${formData.wishes}
    `;

    try {
      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      });

      if (response.ok) {
        setSuccessMessage(true); // Устанавливаем состояние успешного отправления
        setTimeout(() => {
          setSuccessMessage(false); // Скрываем сообщение через 3 секунды
        }, 3000);
      } else {
        const errorData = await response.json();
        console.error('Ошибка:', errorData);
        alert(`Ошибка при отправке данных: ${errorData.description}`);
      }
    } catch (error) {
      console.error('Ошибка при запросе:', error);
      alert('Ошибка при отправке данных!');
    }
  };

  return (
    <>
      {successMessage && (
        <div className={s.successMessage}>
          Ваша бронь отправлена!
        </div>
      )}
      <div className={s.cards} data-aos="zoom-in-down" data-aos-delay="100">
        <div className={s.carda}>
          <div className={s.card}>
            <form className={s.form} onSubmit={handleSubmit}>
              <div className={s.text}>
                <p>Забронируй место!</p>
              </div>
              <div></div>
              <div className={s.box}>
                <input
                  type="text"
                  name="name"
                  placeholder="Имя"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="date"
                  name="date"
                  placeholder="Дата"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
                <input
                  type="time"
                  name="time"
                  placeholder="Время"
                  value={formData.time}
                  onChange={handleChange}
                  required
                />
              </div>
              <input
                type="number"
                name="guests"
                className={s.num}
                placeholder="Количество гостей"
                value={formData.guests}
                onChange={handleChange}
                min="0"
                required
              />
              <input
                type="tel"
                name="phone"
                className={s.num}
                placeholder="Телефон"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="wishes"
                placeholder="Ваши Пожелания"
                value={formData.wishes}
                onChange={handleChange}
              />
              <div className={s.btn}>
                <button type="submit" className={color}>
                  Забронировать!
                </button>
              </div>
            </form>
            <img src="/bronyaa.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Bron;
