import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import s from "./Market.module.scss";

const Market = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
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
    setStartIndexes((prev) => ({
      ...prev,
      [categoryName]: Math.min(
        prev[categoryName] + 1,
        categoryProducts.length - slidesPerView
      ),
    }));
  };

  const handlePrev = (categoryName) => {
    setStartIndexes((prev) => ({
      ...prev,
      [categoryName]: Math.max(prev[categoryName] - 1, 0),
    }));
  };

  const addToCart = (product) => {
    setCart((prevCart) => ({
      ...prevCart,
      [product.id]: prevCart[product.id]
        ? { ...prevCart[product.id], quantity: prevCart[product.id].quantity + 1 }
        : { ...product, quantity: 1 },
    }));
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      delete newCart[productId];
      return newCart;
    });
  };

  const increaseQuantity = (productId) => {
    setCart((prevCart) => ({
      ...prevCart,
      [productId]: { ...prevCart[productId], quantity: prevCart[productId].quantity + 1 },
    }));
  };

  const decreaseQuantity = (productId) => {
    setCart((prevCart) => {
      if (prevCart[productId].quantity > 1) {
        return {
          ...prevCart,
          [productId]: { ...prevCart[productId], quantity: prevCart[productId].quantity - 1 },
        };
      } else {
        const newCart = { ...prevCart };
        delete newCart[productId];
        return newCart;
      }
    });
  };

  const clearCart = () => {
    setCart({});
  };

  const getTotalPrice = () => {
    return Object.values(cart).reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
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
                      onClick={() => handleNext(category.name, categoryProducts)}
                      disabled={(startIndexes[category.name] || 0) + slidesPerView >= categoryProducts.length}
                      className={s.rightArrow}
                    >
                      &gt;
                    </button>
                  </div>
                </div>
                <Swiper modules={[Navigation]} spaceBetween={20} slidesPerView={slidesPerView} className={s.swiper}>
                  {visibleProducts.map((product) => (
                    <SwiperSlide key={product.id} className={s.card}>
                      <img src={product.image} alt={product.name} />
                      <div className={s.text__content}>
                        <h2>{product.name}</h2>
                        <h3>{product.size}</h3>
                        <h4>{product.features}</h4>
                      </div>
                      <div className={s.priceandcart}>
                        <div className={s.cards}>
                          <s>{(product.price * 1.1).toFixed(2)}</s> {/* Строчная цена со скидкой */}
                          <p>{product.price}₽</p> {/* Обычная цена */}
                        </div>
                        <button onClick={() => addToCart(product)} className={s.addToCartButton}>
                          <img className={s.korzina} src="/korzina.png" alt="Add to Cart" />
                        </button>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            );
          })}
        </div>

        <div className={s.cart}>
          <h2>Корзина</h2>
          {Object.keys(cart).length === 0 ? (
            <p>Корзина пуста</p>
          ) : (
            <>
              <ul>
                {Object.values(cart).map((item) => (
                  <li key={item.id}>
                    <div className={s.cartDetails}>
                      <img src={item.image} alt={item.name} />
                      <span>{item.name}</span>
                    </div>
                    <div className={s.cartActions}>
                      <button onClick={() => decreaseQuantity(item.id)} className={s.decreaseQuantity}>-</button>
                      <span className={s.quantity}>{item.quantity}</span>
                      <button onClick={() => increaseQuantity(item.id)} className={s.increaseQuantity}>+</button>
                      <button onClick={() => removeFromCart(item.id)} className={s.removeItem}>X</button>
                    </div>
                  </li>
                ))}
              </ul>
              <h3 className={s.btnitog}>Итого: {getTotalPrice()}₽</h3>
              <button onClick={clearCart} className={s.clearCartButton}>Очистить корзину</button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Market;
