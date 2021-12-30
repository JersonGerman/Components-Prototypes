import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';
import Counter from './components/Counter';
import UserCardAxios from './components/UserCardAxios';
import UserCardRandom from './components/UserCardRandom';
import colors from './data/colors.json';
import getNumber from './util/Funciones';

function App() {

  const [component, setComponent] = useState(<></>);
  const [user, setUser] = useState({});

  useEffect(()=>{
    document.body.style = `background: ${colors[getNumber(colors.length)]}`;
    console.log("useEffect App");

  },[]);

  console.log('render app');
  return (
    <div className="App">
      <div>
        <button onClick={()=>setComponent(<Counter/>)}>Counter</button>
        <button onClick={()=>setComponent(<UserCardRandom/>)}>User Card Random</button>
        <button onClick={()=>setComponent(<></>)}>Counter Random Background</button>
        <button onClick={()=>setComponent(<UserCardAxios/>)}>User Card Axios</button>
      </div>
      {component}
    </div>
  );
}

export default App;
