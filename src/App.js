import { BrowserRouter } from 'react-router-dom';
import { RoutesLayoutCarvajal } from './components/routes/RoutesLayoutCarvajal.jsx';
import React from 'react';
import './App.css';
import { NavBarCarvajal } from './components/routes/NavbarCarvajal.jsx';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <RoutesLayoutCarvajal/>
      </BrowserRouter>
    </div>
  );
}

export default App;
