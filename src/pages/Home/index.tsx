import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './style.css';
import Widget from '../../components/Widget';

function App() {
  const [counterState, setCounterState] = useState(0);

  return (
    <div className="Home">
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <p>
          Ebin
        </p>
        <Link className="Home-link" to="/learn">
          Learn React
        </Link>

        <Link className="Home-link" to={`/count/${counterState}`}>
          Check counter state
        </Link>       

        <div>
          <Widget callback={ setCounterState }/>
        </div>
      </header>
    </div>
  );
}

export default App;
