import React, {lazy, Suspense} from "react";
import {  AddUser, List } from "./components";
import "./App.css";




function App() {
  
// const LazyList = lazy(() => import("./components/list/list.component"));


  return (
    <div className="App">
      <h1>Redux Toolkit Example</h1>
      <AddUser />
      <br />
      <hr />
        <List />
      {/*
      <Suspense fallback={<span>Loading...</span>}>
       <LazyList />
      </Suspense> 
      */}
    </div>
  );
}

export default App;
