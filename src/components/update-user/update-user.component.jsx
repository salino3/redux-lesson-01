import React, {useState} from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector} from 'react-redux';
import { changeDataUser } from '../../redux';
import './update-user.styles.css';

export const UpdateUser = () => {

  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const params = useParams();
  const navigate = useNavigate();

  const userObj = users.filter((user) => user.id === Number(params.id))[0];

  const [user, setUser] = useState(userObj);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

   const handleSubmit = (event) => {
     event.preventDefault();

     dispatch(changeDataUser(user));
     navigate('/');
   };


  return (
    <div>
      <h2>Update Page {params.id}</h2>
      <form onSubmit={handleSubmit} className="myForm">
        <div className="formComponent">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={user.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="formComponent">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={user.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="formComponent">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
          />
        </div>
        <button className="btnSubmit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
