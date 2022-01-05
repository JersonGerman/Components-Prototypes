import { useEffect, useState } from "react/cjs/react.development";
import colors from '../data/colors.json';
import getNumber from "../util/Funciones";
import axios from "axios";
import Spinner from "./Spinner";

const UserCardAxios = ()=>{

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        let isValidator = true;
        document.body.style = `background: ${colors[getNumber(colors.length)]}`;
        isValidator && axios.get('https://jsonplaceholder.typicode.com/users/'+(getNumber(10)+1))
        .then(data => {
            setIsLoading(false);
            setUser(data.data);
        })
        .catch(error => console.log(error));
        return ()=> {isValidator=false}
    },[])

    const style = {
        padding: '5px 10px 40px'
    }

    return(
        <>
            {
                isLoading?<Spinner/>:(
                    <div className='card' style={style}>
                    <h3>{user.name}</h3>
                    <div>
                    <i className="fas fa-map-marker-alt"></i>{user.address?.city}
                    </div>
                    <div>
                    <i className="fas fa-phone-alt"></i>{user.phone}
                    </div>
                    <div>
                    <i className="fas fa-envelope"></i>{user.email}
                    </div>
                    </div>
                )
            }
        </>
    )
}

export default UserCardAxios;