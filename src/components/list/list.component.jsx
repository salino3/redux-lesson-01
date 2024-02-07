import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { deleteUser } from "../../redux/user-slice";
import './list.styles.css';


export const List = () => {

    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();


    console.log(users)
  return (
    <section>
      {users &&
        users.map((user) => (
          <ul className="listUl" key={user.id}>
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
              <Link to={`/update/${user.id}`}>
                <button className="btnUpdate">Update</button>
              </Link>
              <button
                onClick={() => dispatch(deleteUser(user.id))}
                className="btnDelete"
              >
                Delete
              </button>
            </li>
          </ul>
        ))}
    </section>
  );
}
