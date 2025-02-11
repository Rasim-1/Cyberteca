import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Stranica1Page from './pages/Stranica1Page';
import Stranica2Page from './pages/Stranica2Page';
import ChoisePage from './pages/ChoisePage';
import ZonaPage from './pages/ZonaPage';
import ZonaPage2 from './pages/ZonaPage2';
import Error from './components/Error/Error';
import MarketPage from './pages/MarketPage';
import ZonaSinglePage from './pages/ZonaSinglePage';
import PricePage from './pages/PricePage';
import Preloader from './components/Preloader/Preloader';
import Kot from './components/Kot/Kot';
import Modal from './components/Modal/Modal';
import './App.css';
import PricePage2 from './pages/PricePage2';
import ZonaSinglePage2 from './pages/ZonaSinglePage2';
import ZonaSinglePage3 from './pages/ZonaSinglePage3';
import ZonaSinglePage4 from './pages/ZonaSinglePage4';
import ZonaSinglePage5 from './pages/ZonaSinglePage5';
import ZonaSinglePage1 from './pages/ZonaSinglePage1';
import Admin from './pages/Admin';
import Pinkod from './pages/Pinkod';


const App = () => {
  const [showChoisePage, setShowChoisePage] = useState(true);
  const [loading, setLoading] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Добавлено
  const navigate = useNavigate();
  const location = useLocation();

  const handleChoice = (path) => {
    setShowChoisePage(false);
    navigate(path);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = "Вернитесь к нам! 😢";
      } else {
        document.title = "Кибертека";
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <AnimatePresence mode="wait">
          {showChoisePage && location.pathname === '/' ? (
            <motion.div
              key="choise-page"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChoisePage onChoice={handleChoice} />
            </motion.div>
          ) : (
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Routes location={location}>
                <Route path="/" element={<ChoisePage onChoice={handleChoice} />} />
                <Route path="/stranica1page" element={<Stranica1Page />} />
                <Route path="/stranica2page" element={<Stranica2Page />} />
                <Route path="/admin" element={isAuthenticated ? <Admin /> : <Pinkod onUnlock={() => setIsAuthenticated(true)} />} />
                <Route path="/zonapage" element={<ZonaPage />} />
                <Route path="/zonapage2" element={<ZonaPage2 />} />
                <Route path="/marketpage" element={<MarketPage />} />
                <Route path="/pricepage" element={<PricePage />} />
                <Route path="/pricepage2" element={<PricePage2 />} />
                <Route path="/zonasinglepage" element={<ZonaSinglePage />} />
                <Route path="/zonasinglepage1" element={<ZonaSinglePage1 />} />
                <Route path="/zonasinglepage2" element={<ZonaSinglePage2 />} />
                <Route path="/zonasinglepage3" element={<ZonaSinglePage3 />} />
                <Route path="/zonasinglepage4" element={<ZonaSinglePage4 />} />
                <Route path="/zonasinglepage5" element={<ZonaSinglePage5 />} />
                <Route path="*" element={<Error />} />
              </Routes>
              {location.pathname !== '/' && <Kot />}
              {location.pathname !== '/marketpage' && location.pathname !== '/pricepage' && isModalVisible && <Modal onClose={handleCloseModal} />}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </>
  );
};

export default App;
