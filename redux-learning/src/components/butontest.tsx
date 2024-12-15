import React, { FC, MouseEvent } from 'react';

const ButtonComponent:FC = ():React.ReactNode => {
    
  const handleMouseEvent = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('Button clicked!');
  };

  return <button onClick={handleMouseEvent}>Click me!</button>;
};

export default ButtonComponent;