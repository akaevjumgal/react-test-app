
import { useEffect, useRef, useState } from 'react';
import ReactSelect from 'react-select';
import ClassComponent from '../ClassComponent';
import HelloWorld from '../component';
import Tabs from '../components/Tabs/Tabs';
import Header from '../Header';
import { ThemeContext } from '../theme';

export default function HomePage() {
  const [theme, setTheme] = useState('light')
  const [isActive, setActive] = useState([]);
  const activate = () => {
    setActive([]);
  }

  const options = [{ label: 'Tab 1', value: '1' }, { label: 'Tab 2', value: '2' }]

  const onChangeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const selectRef = useRef(null)
  
  useEffect(() => {
    selectRef.current.controlRef.childNodes[1].className = 'custom-arrow'
  }, [])

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme: onChangeTheme }}>
        <div className={theme}>
          <Header />
          <ReactSelect ref={selectRef} />
          <div id="app" className={isActive.length && 'active'}>
            <HelloWorld message='Hello Man' activate={activate} isActive={isActive}>
              <p>Click me</p>
            </HelloWorld>
            <Tabs options={options} />
            {!!isActive.length && (
              <ClassComponent refetch={isActive} />
            )}
          </div>
        </div>
      </ThemeContext.Provider>
    </>
  );
}