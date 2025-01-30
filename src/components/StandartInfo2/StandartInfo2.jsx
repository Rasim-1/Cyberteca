import React, { useEffect, useState } from 'react'
import s from './StandartInfo2.module.scss'

const StandartInfo2 = () => {
    const [activeIndex, setActiveIndex] = useState(0);
  
    const images = [ 
      '/standartInfo4.png',
      '/standartInfo5.png'
    ];
  
    useEffect(() => {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 4000);
  
      return () => clearInterval(interval);
    }, [images.length]);
  
    const handlePaginationClick = (index) => {
      setActiveIndex(index);
    };
  
    return (
      <>
        <section className={s.StandartInfo2}>
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

export default StandartInfo2;