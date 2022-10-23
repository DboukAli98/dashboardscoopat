import React from 'react';
import './handler.scss';

const ErrorMessage = (message) => {
  return (
    <div className='errorContainer'>
        <label className="labelError">{message}</label>
    </div>
  )
}

export default ErrorMessage;