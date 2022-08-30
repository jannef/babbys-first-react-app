import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './style.css';

function App() {
  const { count } = useParams();

  return (
    <div className="Home">
      <header className="Home-header">
        Vi har klikkad { count } många gång.

        <Link className="Home-link" to="/">
          Till veg hem
        </Link>
      </header>      
    </div>
  );
}

export default App;
