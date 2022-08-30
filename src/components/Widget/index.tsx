import React, { useState } from 'react';
import './style.css';

const storageKey = 'session-counter-state'

function Widget({ callback }: { callback: (count: number)=>void}) {
  const [ clickCount, setClickCount ] = useState(0);  

  const onClick = () => {
    const newCount = clickCount + 1;
    callback(newCount);
    setClickCount(newCount);
  }

  return (
    <button className="Widget" onClick={ onClick }>
      Clicked {clickCount}
    </button>
  );
}

export default Widget;
