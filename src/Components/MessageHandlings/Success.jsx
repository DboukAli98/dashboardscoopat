import React from 'react';
import './handler.scss';

const SuccessMessage = (message) => {
  return (
    <div className='successContainer'>
        <label className="labelSuccess">{message}</label>
    </div>
  );
}

export default SuccessMessage;