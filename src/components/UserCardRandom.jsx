import { useState } from 'react';
import './UserCardRandom.css';
import users from '../data/users.json';
import getNumber from '../util/Funciones';

const UserCardRandom = ()=>{

    const [user, setUser] = useState(users[getNumber(users.length)]);

    const changeUser = ()=>{setUser(users[getNumber(users.length)])}

    return (
        <div className="card">
            <h3>{user.name?.first+' '+user.name?.last}</h3>
            <div className="card-img">
                <img src={user.picture?.large} alt='imagen'/>
            </div>
            <div>
                <i className="fas fa-map-marker-alt"></i>{`${user.location?.country}, ${user.location?.state}`}
            </div>
            <div>
                <i className="fas fa-phone-alt"></i>{user.phone}
            </div>
            <div>
                <i className="fas fa-envelope"></i>{user.email}
            </div>
            <button><i className="fas fa-random" onClick={changeUser}></i></button>
        </div>
    )
}

export default UserCardRandom;