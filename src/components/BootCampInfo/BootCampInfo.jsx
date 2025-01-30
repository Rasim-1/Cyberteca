import React, { useEffect, useState } from 'react';
import s from './BootCampInfo.module.scss';

const BootCampInfo = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const images = {
    desktop: '/Bootcamp1.png', 
    mobile: '/Bootcamp2.png', 
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className={s.BootCamp}>
      <div className={s.imageWrapper}>
        <img
          src={isMobile ? images.mobile : images.desktop}
          alt={isMobile ? 'Mobile View' : 'Desktop View'}
        />
      </div>
    </section>
  );
};

export default BootCampInfo;
