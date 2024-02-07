import React, { useState, useEffect } from "react";
import {useDispatch} from 'react-redux';
import {addUser} from './redux/user-slice';
 import { Header } from "./components/header";
import "./App.css";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
   fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((res) => res.json())
     .then((data) => dispatch(addUser(data)))
      .catch((err) => console.log(err))
     
  }, [])
  

  const [count, setCount] = React.useState(0);

  return (
    <div className="App">
      <Header />
      <h1>Hola</h1>
    </div>
  );
}

export default App;
