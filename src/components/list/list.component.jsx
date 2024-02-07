import {useSelector} from 'react-redux';
import './list.styles.css';


export const List = () => {

    const users = useSelector((state) => state.users);


    console.log(users)
  return (
    <section>
      {users &&
        users.map((user, index) => (
          <ul className="listUl" key={index}>
            <li>
              Name: &nbsp;
              <span className="spanValue">{user.name}</span>
            </li>
            <li>
              Email: &nbsp;
              <span className="spanValue">{user.email}</span>
            </li>
            <li>
              Username: &nbsp;
              <span className="spanValue">{user.username}</span>
            </li>
            <li className="liBtns">
              <button className="btnUpdate">Update</button>
              <button className="btnDelete">Delete</button>
            </li>
          </ul>
        ))}
    </section>
  );
}
