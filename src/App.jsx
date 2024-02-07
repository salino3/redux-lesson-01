import React from "react";
import { AddUser, List } from "./components";
import "./App.css";

function App() {



  const [count, setCount] = React.useState(0);

  return (
    <div className="App">
      <h1>Redux Toolkit Example</h1>
      <AddUser />
      <br />
      <hr />
      <List />
    </div>
  );
}

export default App;
