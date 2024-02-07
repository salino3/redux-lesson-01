import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from '../App';
import { UpdateUser } from '../components';


export const AppRouter = () => {
  return (
    <Routes>
      <Route path={"/"} element={<App />} />{" "}
      <Route path={"/update/:id"} element={<UpdateUser />} />
    </Routes>
  );
};