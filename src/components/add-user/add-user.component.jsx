import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/user-slice.js";
import './add-user.styles.css';


export const AddUser = () => {

  const dispatch = useDispatch();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });
    

 const handleChange = (event) => {
   const { name, value } = event.target;
   setUser({ ...user, [name]: value });
 };

  const handleSubmit = (event) => {
    event.preventDefault();
    
   dispatch(addUser(user));
    console.log(user);
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
          />
          </div>
          <button className="btnSubmit" type="submit">
            Submit
          </button>
      </form>
    </>
  );
}
