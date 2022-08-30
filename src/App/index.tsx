import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import Home from '../pages/Home'
import Learn from '../pages/Learn'
import Count from '../pages/Count'

import './style.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/learn" element={ <Learn />} />
          <Route path="/count/:count" element={ <Count /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
