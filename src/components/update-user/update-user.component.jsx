import React from 'react';
import { useParams } from 'react-router-dom';
import './update-user.styles.css';

export const UpdateUser = () => {

  const params = useParams();


  return (
    <div>
      <h2>Update Page {params.id}</h2>
    </div>
  );
}
