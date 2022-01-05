import { useState, useEffect } from "react";
import axios from "axios";
import getNumber from "../../../util/Funciones";
import Spinner from "../../Spinner";

const Users = ()=>{
    
    const [isLoading, setIsLoading] = useState(true);

    const [user,setUser] = useState('');
    useEffect(()=>{
        let isValidator = true;
        isValidator && axios.get(`https://jsonplaceholder.typicode.com/users/${getNumber(10)+1}`)
        .then((res) =>{
            setIsLoading(false);
            setUser(res.data);
        })
        .catch(error => console.log('error', error));    

        return ()=>{isValidator = false}   
    },[])
    return(<>
        {
            isLoading?(<Spinner/>):(<div className="card" style={{padding:'0 2rem'}}>
                <p style={{textAlign:'right',width:'100%'}}>users</p>
                <h3>{user.name}</h3>
                <p>City: {user.address?.city}</p>
                <p>Phone: {user.phone}</p>
                <p>Email: {user.email}</p>
            </div>)
        }</>
    );
}
export default Users;