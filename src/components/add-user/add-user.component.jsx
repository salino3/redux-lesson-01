import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, plusOne } from "../../redux";
import './add-user.styles.css';


export const AddUser = () => {

  const dispatch = useDispatch();
  const newID = useSelector((state) => state.newID);

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    id: newID,
  });
    

 const handleChange = (event) => {
   const { name, value } = event.target;
   setUser({ ...user, [name]: value });
 };

  const handleSubmit = (event) => {
    event.preventDefault();
    
   dispatch(addUser(user));
   dispatch(plusOne());
    console.log(user);
     setUser({
       name: "",
       username: "",
       email: "",
       id: newID + 1,
     });
  };

useEffect(() => {
  console.log(user);
}, [user])


  return (
    <>
      <h2>AddUser</h2>
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
    </>
  );
}
