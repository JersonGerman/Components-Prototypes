import Users from './subComponents/Users';
import Post from './subComponents/Post';
import ToDo from './subComponents/Todo';

const CardApi = (props) => {   

    const {handleComponent} = props;

    return(
      <div>
        <h3>Ejercicios</h3>
        <div>
          <button onClick={()=>handleComponent(<Users/>)}>users</button>
          <button onClick={()=>handleComponent(<Post/>)}>post</button>
          <button onClick={()=>handleComponent(<ToDo/>)}>To Do´s</button>
        </div>
        <div>
        
        </div>
      </div>
    )
}

export default CardApi;
