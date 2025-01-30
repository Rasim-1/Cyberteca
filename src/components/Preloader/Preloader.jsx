import React, { useState, useEffect } from "react";
import s from "./Preloader.module.scss";

const Preloader = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Имитируем загрузку
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setLoadingComplete(true);
          return 100;
        }
        return prev + 1; // Увеличение прогресса
      });
    }, 30); // Скорость прогресса (30мс на 1%)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={s.Preloader}>
      <div className={s.container}>
        {/* Логотип */}
        
        <i className={s.logoText}>Кибертека</i>

        {/* Анимация палочек */}
        <div className={`${s.loader} ${loadingComplete ? s.complete : ""}`}>
          {[...Array(100)].map((_, index) => (
            <div
              key={index}
              className={`${s.bar} ${loadingComplete ? s.complete : ""}`}
              style={{
                animationDelay: `${index * 0.03}s`, // Задержка для анимации
              }}
            ></div>
          ))}
        </div>

        {/* Индикатор загрузки */}
        <div className={s.progress}>
          {progress}% {/* Отображаем процент загрузки */}
        </div>
      </div>
    </div>
  );
};

export default Preloader;
