import { BrowserRouter } from 'react-router-dom';
import { NavBarCarvajal } from './components/routes/NavbarCarvajal';
import './App.css';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBarCarvajal/>
        {/* <RoutesLayoutCarvajal/>*/}
      </BrowserRouter>
    </div>
  );
}

export default App;
