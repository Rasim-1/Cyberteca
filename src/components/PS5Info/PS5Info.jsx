import React,{ useState, useEffect } from 'react'
import s from './PS5Info.module.scss'

const PS5Info = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    '/PS5Info1.png',
    '/PS5Info2.png'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [images.length]);

  const handlePaginationClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <section className={s.PS5Info}>
        <div className={s.imageWrapper}>
          <img src={images[activeIndex]} alt={`Slide ${activeIndex + 1}`} />
        </div>
        <div className={s.pagination}>
          {images.map((_, index) => (
            <button
              key={index}
              className={index === activeIndex ? s.active : ''}
              onClick={() => handlePaginationClick(index)}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default PS5Info