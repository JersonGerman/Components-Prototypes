import {useState, useEffect} from 'react';
import './Counter.css';

const Counter = ()=>{

    const [counter, setCounter] = useState(9999);

    useEffect(()=>{
        let isActive = true
        setTimeout(() => {
            if(isActive)setCounter(0);
            console.log('useEffect Counter');
        }, 3000);   
        return ()=>{isActive = false};
    },[]);


    console.log('Render Counter')
    

    return(
        <div className='counter'>
            <h2>Counter</h2>
            <h1>{counter}</h1>
            <div>
                <button onClick={()=>setCounter(counter+1)}>Incrementar</button>
                <button onClick={()=>setCounter(counter-1)}>Decrementar</button>
                <button onClick={()=>setCounter(0)}>Resetear</button>
            </div>
        </div>
    )
}

export default Counter