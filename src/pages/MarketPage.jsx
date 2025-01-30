import React, { useState, useEffect } from 'react';
import Market from '../components/Market/Market';
import NavMenu from '../components/NavMenu/NavMenu';
import Preloader from '../components/Preloader/Preloader'; // Импортируем Preloader

const MarketPage = () => {
  const [loading, setLoading] = useState(true); // Состояние для загрузки
  const [imagesLoaded, setImagesLoaded] = useState(false); // Состояние для загрузки изображений

  useEffect(() => {
    // Задаем список изображений для загрузки
    const imagesToLoad = [
      '/gif2.gif',
      // 'path/to/image2.jpg',
      // 'path/to/image3.jpg',
      // Добавьте сюда все пути к изображениям, которые нужно загрузить
    ];

    const loadImages = imagesToLoad.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;  // Успешная загрузка
        img.onerror = reject;  // Ошибка загрузки
      });
    });

    // Загружаем все изображения асинхронно
    Promise.all(loadImages)
      .then(() => {
        setImagesLoaded(true); // Все изображения загружены
        setLoading(false); // Останавливаем показ прелоадера
      })
      .catch((error) => {
        console.error('Error loading images:', error);
        setLoading(false); // Останавливаем прелоадер в случае ошибки
      });
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />  // Показываем прелоадер, пока идут загрузки
      ) : (
        <>
          <Market />  {/* Контент страницы магазина */}
          <NavMenu strnica={"/stranica1page"} />  {/* Навигационное меню */}
        </>
      )}
    </>
  );
};

export default MarketPage;
