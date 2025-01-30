import React, { useEffect, useState } from 'react'
import s from './StanfartPlus2.module.scss'
const StanfartPlus2 = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const images = [
      '/standartplus3.png', 
      '/standartplus4.png'
   
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
        <section className={s.Standart}>
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


export default StanfartPlus2