import { useState, useEffect } from "react";
import getNumber from "../util/Funciones";
import colors from "../data/colors.json";

const CounterRandomBackground = ()=>{

    const [valor1, setValor1] = useState(0);

    const style = {
        marginTop:"2rem"
    }

    useEffect(()=>{
        document.body.style = `background-color: ${colors[getNumber(colors.length)]}`;
    },[valor1])

    return (
        <div style={style}>
            <h2>{valor1}</h2>
            <button onClick={()=>setValor1(valor1+1)}>incrementar</button>
        </div>
    )
}

export default CounterRandomBackground;