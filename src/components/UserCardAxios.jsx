import { useEffect, useState } from "react/cjs/react.development";
import colors from '../data/colors.json';
import getNumber from "../util/Funciones";
import axios from "axios";

const UserCardAxios = ()=>{

    const [user, setUser] = useState({});

    useEffect(()=>{
        document.body.style = `background: ${colors[getNumber(colors.length)]}`;
        axios.get('https://jsonplaceholder.typicode.com/users/'+(getNumber(10)+1))
            .then(data => (
            setUser(data.data),
            console.log(data.data),
            console.log('useEffect User Card Axios')
            ));
    },[])

    console.log('User Card Axios');

    const style = {
        padding: '5px 10px 40px'
    }
    

    return(
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

export default UserCardAxios;