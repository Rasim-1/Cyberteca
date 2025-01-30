import React from "react";
import s from "./Baupro.module.scss";

const Baupro = ({ tariffs }) => {
  return (
    <div className={s.baumpro}>
      <div className="container">
        <div className={s.baum}>
          <h2 className={s.title}>БАУМАНСКАЯ</h2>
          <div className={s.ccb}>
            {tariffs.map((tariff, index) => (
              <div className={s[tariff.type]} key={index}>
                <h3 className={s.subtitle}>{tariff.title}</h3>
                <div className={s.skidki}>
                  {tariff.discounts.map((discount, i) => (
                    <p key={i}>{discount}</p>
                  ))}
                </div>
                <table className={s.tariffsTable}>
                  <thead>
                    <tr className={s.tarif}>
                      <th>Тариф</th><th>Цена</th><th>ПН-СР</th><th>УТРО</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tariff.prices.map((price, i) => (
                      <tr key={i}>
                        <td>{price.time}</td><td>{price.default}</td><td>{price.monWed}</td><td>{price.morning}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>
      <div className={s.pro}>
          <h2 className={s.title}>ПРОФСОЮЗНАЯ</h2>
          <div className={s.ccb}>
            <div className={s.grid}>
              <div className={s.standarts}>
                <div className={s.standart}>
                  <h3 className={s.subtitle}>Стандарт</h3>
                  <div className={s.skidki}>
                    <p></p><p></p><p>скидка</p><p>скидка</p>
                  </div>
                  <table className={s.tariffsTable}>
                    <thead>
                      <tr className={s.tarif} >
                        <th>Тариф</th><th>Цена</th><th>ПН-СР</th><th>УТРО</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1 час</td><td>140</td><td>110</td><td>80</td>
                      </tr>
                      <tr>
                        <td>3 часа</td><td>390</td><td>310</td><td>230</td>
                      </tr>
                      <tr>
                        <td>5 часов</td><td>490</td><td>390</td><td>290</td>
                      </tr>
                      <tr>
                        <td>7 часов</td><td>590</td><td>470</td><td></td>
                      </tr>
                      <tr>
                        <td>Ночь</td><td>690</td><td>550</td><td></td>
                      </tr>
                      <tr>
                        <td>День</td><td>790</td><td>630</td><td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className={s.standartplus}>
                  <h3 className={s.subtitle}>Стандарт  +</h3>
                  <div className={s.skidki}>
                    <p></p> <p></p> <p>скидка</p> <p>скидка</p>
                  </div>
                  <table className={s.tariffsTable}>
                    <thead>
                      <tr className={s.tarif} ><th>Тариф</th><th>Цена</th><th>ПН-СР</th><th>УТРО</th></tr>
                    </thead>
                    <tbody>
                      <tr><td>1 час</td><td>240</td><td>190</td><td>140</td></tr>
                      <tr><td>3 часа</td><td>490</td><td>390</td><td>290</td></tr>
                      <tr><td>5 часов</td><td>690</td><td>550</td><td>410</td></tr>
                      <tr><td>7 часов</td><td>790</td><td>630</td><td></td></tr>
                      <tr><td>Ночь</td><td>890</td><td>710</td><td></td></tr>
                      <tr><td>День</td><td>990</td><td>790</td><td></td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className={s.ps5}>
                <h2 className={s.priceps5} >Цены на PS5 одинаковые <br /> на Профсоюзной и на Бауманской</h2>
                  <div className={s.ps5time} >
                    <p>1 час = 290</p><p>3 час = 590</p><p>5 час = 790</p>
                  </div>
              </div>
            </div>
            
              <div className={s.snacksdrinks}>
                <div className={s.drinks}>
                  <h3>Напитки</h3>
                  <ul className={s.uli}>
                    <li>Вода <span className={s.price}>49₽</span></li>
                    <li>Coca-Cola <span className={s.price}>69₽</span></li>
                    <li>Fanta <span className={s.price}>69₽</span></li>
                    <li>Sprite <span className={s.price}>69₽</span></li>
                    <li>Lipton <span className={s.price}>69₽</span></li>
                    <li>Dr Pepper <span className={s.price}>99₽</span></li>
                    <li>Burn <span className={s.price}>99₽</span></li>
                    <li>Adrenalin <span className={s.price}>99₽</span></li>
                    <li>Drive <span className={s.price}>99₽</span></li>
                    <li>Rich <span className={s.price}>99₽</span></li>
                    <li>Red Bull <span className={s.price}>149₽</span></li>
                    <li>Monster <span className={s.price}>149₽</span></li>
                  </ul>
                </div>
                <div className={s.snacks}>
                  <h3>Снеки</h3>
                  <ul className={s.uli}>
                    <li>Skittles <span className={s.price}>59₽</span></li>
                    <li>Snickers <span className={s.price}>69₽</span></li>
                    <li>Kit Kat <span className={s.price}>69₽</span></li>
                    <li>Mars <span className={s.price}>69₽</span></li>
                    <li>Twix <span className={s.price}>69₽</span></li>
                    <li>Milky Way <span className={s.price}>69₽</span></li>
                    <li>Bounty <span className={s.price}>69₽</span></li>
                    <li>Picnic <span className={s.price}>69₽</span></li>
                    <li>M&M's <span className={s.price}>69₽</span></li>
                    <li>Pringles <span className={s.price}>99₽</span></li>
                  </ul>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Baupro;
