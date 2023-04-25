import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import NavbarComponent from './Components/Navbar';
import HomePage from './Pages/HomePage/index';
import Login from './Pages/Login';
import Register from './Pages/Register';

const App = () => {
  return (
    <>
    <NavbarComponent/>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomePage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
