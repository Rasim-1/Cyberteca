import React from 'react';
import Choice from '../components/Choice/Choice';


const ChoisePage = ({ onChoice }) => {
  return (
    <>
      <Choice onChoice={onChoice} />
 
    </>
  );
};

export default ChoisePage;
