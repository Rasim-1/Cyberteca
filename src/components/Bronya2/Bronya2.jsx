import React from 'react';
import Bron from '../Bron/Bron';
import s from './Bronya2.module.scss';

const Bronya2 = React.forwardRef((props, ref) => {
  return (
    <div className={s.wrapp} ref={ref}>
      <Bron color={"color2"} />
    </div>
  );
});

export default Bronya2;
