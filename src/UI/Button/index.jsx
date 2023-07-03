import React from 'react';
import "./style.scss";

const index = ({ btn_content, btn_class }) => {
  return <button className={btn_class}>{btn_content}</button>;
};

export default index;