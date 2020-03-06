import React from 'react';

function Timer(props) {
  const Timer = time => {
    const seconds = Math.floor(time%60)
      
        .toString()
        .padStart(2,'0');
    const minutes = Math.floor((time/60)%60)
      
        .toString()
        .padStart(2, '0');
    const hours = Math.floor((time/3600)%60)
      
        .toString()
        .padStart(2, '0');
   
   
        return `${hours}:${minutes}:${seconds}`;


  };
  
  
  return (
    <div>
        
        <h1 className='counter'>{Timer(props.time)}</h1>
    </div>
  );
}

export default Timer;