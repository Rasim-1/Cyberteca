import React from 'react';
import Bron from '../Bron/Bron';
import s from './Bronya.module.scss';

const Bronya = React.forwardRef((props, ref) => {
  return (
    <div className={s.wrapp} ref={ref}>
      <Bron color={"color1"} />
    </div>
  );
});

export default Bronya;
