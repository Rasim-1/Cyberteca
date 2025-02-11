import React, { useState } from 'react';

const Pinkod = ({ onUnlock }) => {
  const [pin, setPin] = useState('');
  const correctPin = '1234'; // Замени на свой пин-код

  const handleSubmit = () => {
    if (pin === correctPin) {
      onUnlock();
    } else {
      alert('Неправильный пин-код');
    }
  };

  return (
    <div className="pin-container">
      <h2>Введите пин-код</h2>
      <input 
        type="password" 
        value={pin} 
        onChange={(e) => setPin(e.target.value)} 
        placeholder="Пин-код" 
      />
      <button onClick={handleSubmit}>Войти</button>

      <style jsx>{`
        .pin-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          background-color: #1e1e1e;
          color: white;
        }
        input {
          padding: 10px;
          margin: 10px;
          border-radius: 5px;
          border: none;
          text-align: center;
        }
        button {
          padding: 10px;
          border: none;
          background-color: #007bff;
          color: white;
          cursor: pointer;
          border-radius: 5px;
        }
        button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
};

export default Pinkod;
