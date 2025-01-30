import React from 'react'
import Bron from '../Bron/Bron'
import s from './Error.module.scss'

const Error = () => {
  return (
    <>
    <section className={s.error404}>
        <div className="container">
            <div className={s.wrapper}>
                <div className={s.error}>
                    <img src="/404.png" alt="" />
                    <h3>Что то пошло не так, страница не найдена...</h3>
                    <p>Если ты попал сюда когда искал акцию, не беда!
                    Назови промокод <b>404</b> администратору при регистрации и получи 200₽ на банас!</p>
                </div>
                <Bron color={'color2'}/>
            </div>
        </div>
    </section>
    </>
  )
}

export default Error