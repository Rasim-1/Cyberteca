import React, { useState } from 'react';
import s from './Modal.module.scss';

const Modal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    guests: '',
    phone: '',
    wishes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const message = `
<b>Забронировано место:</b>
Имя: ${formData.name}
Дата: ${formData.date}
Время: ${formData.time}
Количество гостей: ${formData.guests}
Телефон: ${formData.phone}
Пожелания: ${formData.wishes || 'Нет'}
    `;

    const botToken = '7186250261:AAFhXzDCStlXVf-rp34FKCC2k0c6H8cHQuM';
    const chatId = '-4671583313';

    try {
      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: 'HTML',
        }),
      });

      if (response.ok) {
        alert('Данные успешно отправлены в Telegram!');
        setFormData({
          name: '',
          date: '',
          time: '',
          guests: '',
          phone: '',
          wishes: '',
        });
        onClose();
      } else {
        alert('Ошибка при отправке данных.');
      }
    } catch (error) {
      console.error('Ошибка:', error);
      alert('Не удалось отправить данные. Проверьте соединение.');
    }
  };

  return (
    <div className={s.modalOverlay} onClick={onClose}>
      <div className={s.modal} onClick={(e) => e.stopPropagation()}>
        <button className={s.closeButton} onClick={onClose} aria-label="Закрыть">
          &times;
        </button>
        <form className={s.form} onSubmit={handleSubmit}>
          <h2>Забронируй место!</h2>
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
          <input
            type="number"
            name="guests"
            placeholder="Количество гостей"
            value={formData.guests}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Телефон"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="wishes"
            placeholder="Ваши пожелания"
            value={formData.wishes}
            onChange={handleChange}
          />
          <button className={s.btn} type="submit">Отправить</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
