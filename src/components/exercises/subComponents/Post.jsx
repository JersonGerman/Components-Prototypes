import { useState, useEffect } from "react";
import axios from "axios";
import getNumber from "../../../util/Funciones";
import Spinner from "../../Spinner";

const Post = ()=>{
    const [post, setPost] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        let isValidator = true;
        isValidator && axios.get(`https://jsonplaceholder.typicode.com/posts/${getNumber(10)+1}`)
        .then(res=>{
            setIsLoading(false);
            setPost(res.data);
        })
        .catch(error=>console.log(error));

        return ()=>{isValidator = false};
    },[])
    
    return(
        <>
        {isLoading?<Spinner/>:(
            <div className="card" style={{padding:'0 2rem' , width:'50%'}}>
            <p style={{textAlign:'right',width:'100%'}}>Pos´t</p>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
        )}
        </>
    )
}
export default Post;