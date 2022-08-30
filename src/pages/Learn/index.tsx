import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function App() {
  return (
    <div className="Home">
      <header className="Home-header">
        <p>
          Om jag hade en pistol skille jag sättä em kula
        </p>
        <a
          className="Home-link"
          href="https://pbs.twimg.com/media/EWyn2TkXsAM-vC5.jpg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Prescis här
        </a>

        <Link className="Home-link" to="/">
          Till veg hem
        </Link>
      </header>      
    </div>
  );
}

export default App;
