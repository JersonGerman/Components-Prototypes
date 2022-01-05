import { useState, useEffect } from 'react';
import './App.css';
import Counter from './components/Counter';
import CounterRandomBackground from './components/CounterRandomBackground';
import UserCardAxios from './components/UserCardAxios';
import UserCardRandom from './components/UserCardRandom';
import colors from './data/colors.json';
import getNumber from './util/Funciones';
import CardApi from './components/exercises/CardApi';

function App() {

  const [component, setComponent] = useState(<></>);
  const [prototypes, setPrototypes] = useState(false);

  
  useEffect(() => {

    document.body.style = `background: ${colors[getNumber(colors.length)]}`;
    console.log("useEffect App");

  },[]);

  console.log('render app');

  const ComponentsPrototypes = ()=>{
    return(
      <>
        <div>
          <h3>Components Prototypes</h3>
          <button onClick={()=>setComponent(<Counter/>)}>Counter</button>
          <button onClick={()=>setComponent(<UserCardRandom/>)}>User Card Random</button>
          <button onClick={()=>setComponent(<CounterRandomBackground/>)}>Counter Random Background</button>
          <button onClick={()=>setComponent(<UserCardAxios/>)}>User Card Axios</button>
        </div>
      </>
    )
  }

  const handleComponent = (component)=>{
    setComponent(component);
  }


  return (
    <div className="App" >
      <button onClick={()=>setPrototypes(!prototypes)}>{prototypes?'Change to Exercises':'Change to Prototypes'}</button>

      {prototypes?<ComponentsPrototypes/>:<CardApi handleComponent={handleComponent}/>}
      
      {component}
    </div>
  );
}

export default App;
