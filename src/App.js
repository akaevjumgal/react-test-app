import { useContext, useState } from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Header from './Header';
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

  const onChangeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme: onChangeTheme }}>
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
    </ThemeContext.Provider>
  );
}

export default App;
