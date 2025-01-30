import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import s from './Slider2.module.scss';
import { delay } from 'framer-motion';

const Slider2 = () => {
  // Добавляем массив с изображениями
  const slides = [
    '/standartInfo1.png',
    '/standartInfo2.png',
    '/standartInfo3.png',
    '/standartplus1.png',
    '/standartplus2.png',
    '/Bootcamp1.png',
  
  ];

  return (
    <div className={s.slider}>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={100} // Расстояние между слайдами
        slidesPerView={1.5} // Количество видимых слайдов
        centeredSlides={true} // Центральный слайд
        autoplay={
          {delay:2500}
        }
        pagination={{ clickable: true }} // Включаем пагинацию
        loop={true}
        initialSlide={1} // Начинаем со второго слайда (индекс 1)
      >
        {slides.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Slide ${index + 1}`} className={s.slideImage} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider2;
