import React from 'react';
import "./style.scss";

const index = ({ cardTitle , cardText , cardLink}) => {
  return (
    <div className="card">
      <h3>{cardTitle}</h3>
      <p>{cardText}</p>
      <a href="#">{cardLink}</a>

      
    </div>
  );
};

export default index;