import { useState, useEffect } from "react";
import axios from "axios";
import getNumber from "../../../util/Funciones";
import Spinner from "../../Spinner";

const ToDo= ()=>{
    const [toDo, setToDo] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        let isValidator = true;
        isValidator && axios.get(`https://jsonplaceholder.typicode.com/todos/${getNumber(10)+1}`)
        .then(res=>{
            setIsLoading(false);
            setToDo(res.data);
        })
        .catch(error=>console.log(error));
        return ()=>{isValidator=false}
    },[])

    return(<>
        {
            isLoading?(<Spinner/>):(<div className="card" style={{padding:'0 2rem'}}>
            <p style={{textAlign:'right',width:'100%'}}>To Do´s</p>
            <h3>{toDo.title}</h3>
            <p style={{width:'100%',textAlign:'center'}}>completed: <b>{toDo.completed?'true':'false'}</b></p>
            </div>)
        }
    </>
    )
}
export default ToDo;