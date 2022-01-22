import HelloWorld from './component';
import { useState } from 'react';
import Tabs from './components/Tabs/Tabs';
import ClassComponent from './ClassComponent';

function App() {
  const [isActive, setActive] = useState(false);
  const activate = () => {
    setActive(!isActive);
  }

  const options = [{ label: 'Tab 1', value: '1' }, { label: 'Tab 2', value: '2' }]

  return (
    <div id="app" className="App">
      <HelloWorld message='Hello Man' activate={activate} isActive={isActive}>
        <p>Click me</p>
      </HelloWorld>
      <Tabs options={options} />
      {/* <ClassComponent refetch={isActive} /> */}
    </div>
  );
}

export default App;
