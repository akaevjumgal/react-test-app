import { useContext, useState } from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { ModalPortal } from './components/Modal';
import Header from './Header';
import { ModalContext, useModal } from './ModalContext';
import AboutDetailsPage from './pages/AboutDetailsPage';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import { ThemeContext } from './theme';

function MainLayout() {
  const { theme } = useContext(ThemeContext)
  return (
      <div className={theme}>
        <Header />
        <Outlet />
      </div>
  )
}

function App() {
  const [theme, setTheme] = useState('dark')
  const { isOpen, openModal } = useModal()

  const onChangeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme: onChangeTheme }}>
      <ModalContext.Provider value={{ isOpen, open: openModal }}>
        <div className={theme}>
          <Header />
          <Routes>
              <Route
                index
                element={<HomePage />}
              />
              <Route
                path="about"
                element={<AboutPage />} 
              />
              <Route path="about/:aboutId" element={<AboutDetailsPage />}>
                <Route index element={<div>Bla bla</div>} />
                <Route path="details" element={<div>About custom</div>} />
              </Route>
              <Route
                path="*" 
                element={<NotFoundPage />} 
              />
          </Routes>
          </div>
          <ModalPortal />
        </ModalContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
