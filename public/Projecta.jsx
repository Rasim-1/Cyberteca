import React, { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import s from './Projecta.module.scss';

const Projecta = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentRotation, setCurrentRotation] = useState(0);
  const sliderRef = useRef();

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });

    // Автопрокрутка карусели
    const interval = setInterval(() => {
      if (!isDragging) {
        setCurrentRotation((prev) => prev + 0.2); // Повышаем угол на 0.2 градуса (медленнее)
      }
    }, 30); // Каждые 50 миллисекунд увеличиваем на 0.2 градуса (медленнее)

    return () => clearInterval(interval); // Очищаем интервал при размонтировании компонента
  }, [isDragging]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startX;
    setCurrentRotation((prev) => prev + deltaX / 5); // Двигаем карусель в зависимости от движения мыши
    setStartX(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const carouselItems = [
    { img: '/Shibuya.png', title: 'SHIBUYA', desc: 'Один из лучших моих проектов', link: 'https://rasim-1.github.io/shibuya50/' },
    { img: '/castaway.jpg', title: 'Project 1', desc: 'Один из первых моих сайтов с музыкой', link: 'https://rasim-1.github.io/castaway/' },
    { img: '/castaway.jpg', title: 'Project 2', desc: 'Пример текста описания.', link: '#' },
    { img: '/castaway.jpg', title: 'Project 3', desc: 'Пример текста описания.', link: '#' },
  ];

  return (
    <section className={s.cards} id="projects">
      <div className="container">
        <h2 className={s.cards__title} data-aos="zoom-in-down">Projects</h2>

        <div
          className={s.slider}
          style={{
            transform: `perspective(1000px) rotateY(${currentRotation}deg)`, // Применяем вращение
          }}
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          {carouselItems.map((item, index) => (
            <div
              className={s.item}
              key={index}
              style={{
                '--position': index + 1,
                '--quantity': carouselItems.length,
                transform: `rotateY(calc(${index} * (360deg / ${carouselItems.length}))) translateZ(300px)`,
              }}
            >
              <div className={s.item__content}>
                <img src={item.img} alt="project-img" className={s.item__img} />
                <div className={s.item__overlay}></div> {/* Псевдоэлемент для затемнения */}
                <div className={s.item__text}>
                  <h3 className={s.item__title}>{item.title}</h3>
                  <p className={s.item__desc}>{item.desc}</p>
                  <a href={item.link} className={s.card__btn}>Look it up</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default Projecta;
