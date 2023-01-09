import React from 'react';
import './prompts.scss';

const Error = ({text}) => {
  return (
    <div className='ErrorContainer'>
        <p className="errorText">{text}</p>
    </div>
  )
};

export default Error;