import axios from "axios";
import { useEffect, useState } from "react";
import getNumber from "../../util/Funciones";


const CardApi = () => {    
    const [component, setComponent] = useState(<></>);

    const Users = ()=>{
        const [user,setUser] = useState('');
        useEffect(()=>{
            axios.get(`https://jsonplaceholder.typicode.com/users/${getNumber(10)+1}`)
                .then(res => (
                    console.log(res.data),setUser(res.data)
                ))
                .catch(error => console.log('error', error));       
        },[])
        return(
            <div className="card" style={{padding:'0 2rem'}}>
                <p style={{textAlign:'right',width:'100%'}}>users</p>
                <h3>{user.name}</h3>
                <p>City: {user.address?.city}</p>
                <p>Phone: {user.phone}</p>
                <p>Email: {user.email}</p>
            </div>
        )
    }
    const Post = ()=>{
        const [post, setPost] = useState('');
        useEffect(()=>{
            let isValidator = true;
            if(isValidator){
                axios.get(`https://jsonplaceholder.typicode.com/posts/${getNumber(10)+1}`)
                .then(res=>setPost(res.data))
                .catch(error=>console.log(error));
            }
            return ()=>{isValidator = false};
        },[])
        return(
            <div className="card" style={{padding:'0 2rem' , width:'50%'}}>
                <p style={{textAlign:'right',width:'100%'}}>Pos´t</p>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        )
    }
    const ToDo= ()=>{
        const [toDo, setToDo] = useState('');
        useEffect(()=>{
            axios.get(`https://jsonplaceholder.typicode.com/todos/${getNumber(10)+1}`)
            .then(res=>setToDo(res.data))
            .catch(error=>console.log(error));
        },[])
        return(
            <div className="card" style={{padding:'0 2rem'}}>
                <p style={{textAlign:'right',width:'100%'}}>To Do´s</p>
                <h3>{toDo.title}</h3>
                <p style={{width:'100%',textAlign:'center'}}>completed: <b>{toDo.completed?'true':'false'}</b></p>
            </div>
        )
    }
    
    return(
      <div>
        <h3>Ejercicios</h3>
        <div>
          <button onClick={()=>setComponent(<Users/>)}>users</button>
          <button onClick={()=>setComponent(<Post/>)}>post</button>
          <button onClick={()=>setComponent(<ToDo/>)}>To Do´s</button>
        </div>
        <div>
            {component}
        </div>
      </div>
    )
}

export default CardApi;
