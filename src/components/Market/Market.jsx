import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";
import s from "./Market.module.scss";

const Market = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]); // Корзина
  const [startIndexes, setStartIndexes] = useState({});
  const slidesPerView = 4;

  const [categories, setCategories] = useState([
    { id: 1, name: "Monitor" },
    { id: 2, name: "PCBlock" },
    { id: 3, name: "Mouse" },
    { id: 4, name: "Keyboard" },
  ]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.product);
        const initialIndexes = {};
        categories.forEach((category) => {
          initialIndexes[category.name] = 0;
        });
        setStartIndexes(initialIndexes);
      });
  }, [categories]);

  const getProductsByCategory = (category) => {
    return products.filter((product) => product.category === category);
  };

  const handleNext = (categoryName, categoryProducts) => {
    setStartIndexes((prevIndexes) => ({
      ...prevIndexes,
      [categoryName]: Math.min(
        prevIndexes[categoryName] + 1,
        categoryProducts.length - slidesPerView
      ),
    }));
  };

  const handlePrev = (categoryName) => {
    setStartIndexes((prevIndexes) => ({
      ...prevIndexes,
      [categoryName]: Math.max(prevIndexes[categoryName] - 1, 0),
    }));
  };

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <section className={s.Market}>
      <div className="container">
        <div className={s.wrapper}>
          {categories.map((category) => {
            const categoryProducts = getProductsByCategory(category.name);
            const visibleProducts = categoryProducts.slice(
              startIndexes[category.name] || 0,
              (startIndexes[category.name] || 0) + slidesPerView
            );

            return (
              <div key={category.id} className={s[category.name]}>
                <div className={s.control}>
                  <h3>{category.name}</h3>
                  <div className={s.controls}>
                    <button
                      onClick={() => handlePrev(category.name)}
                      disabled={(startIndexes[category.name] || 0) === 0}
                      className={s.leftArrow}
                    >
                      &lt;
                    </button>
                    <button
                      onClick={() =>
                        handleNext(category.name, categoryProducts)
                      }
                      disabled={
                        (startIndexes[category.name] || 0) + slidesPerView >=
                        categoryProducts.length
                      }
                      className={s.rightArrow}
                    >
                      &gt;
                    </button>
                  </div>
                </div>
                <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={20}
                  slidesPerView={slidesPerView}
                  pagination={{ clickable: true }}
                  className={s.swiper}
                  breakpoints={{
                    1400: { slidesPerView: 3 }, // При ширине 1400px — 3 карточки
                    1000: { slidesPerView: 2 }, // При ширине 1000px — 2 карточки
                    600: { slidesPerView: 1 },  // При ширине 600px — 1 карточка
                  }}
                >
                  {visibleProducts.map((product) => (
                    <SwiperSlide
                      key={product.id}
                      data-aos="fade-left"
                      className={`${s.card} ${s.animate}`}
                    >
                      <img src={product.image} alt={product.name} />
                      <div className={s.text__content}>
                        <h2>{product.name}</h2>
                        <h3>{product.size}</h3>
                        <h4>{product.features}</h4>
                        {/* Блок цены и корзины */}
                      </div>
                      <div className={s.priceandcart}>
                        <div className={s.cards}>
                          <s>{(product.price * 1.1).toFixed(2)}</s>{" "}
                          {/* Зачеркнутая цена */}
                          <p>{product.price}</p> {/* Обычная цена */}
                        </div>

                        <div>
                          <button
                            onClick={() => addToCart(product)}
                            className={s.addToCartButton}
                          >
                            <img
                              className={s.korzina}
                              src="/korzina.png"
                              alt="Add to Cart"
                            />
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            );
          })}
        </div>
        {/* Корзина */}
        <div className={s.cart}>
          <h2>Корзина</h2>
          {cart.length === 0 ? (
            <p>Корзина пуста</p>
          ) : (
            <ul>
              {cart.map((item, index) => (
                <li key={index}>
                  {item.name} - {item.price}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default Market;
