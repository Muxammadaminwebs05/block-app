import React from 'react';
import "./style.scss"
const index = ({resCardText , resCardTitle}) => {
    return (
        <div className='resCard'>
            <h3>{ resCardTitle}</h3>
            <p>{ resCardText}</p>
        </div>
    );
};

export default index;