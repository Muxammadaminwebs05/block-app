import React from 'react';
import "./style.scss"
const index = ({Li_content}) => {
    return (
      <li className="nav-item">
        <a href="#" className="nav-link">
          {Li_content}
        </a>
      </li>
    );
};

export default index;