// import "bootstrap/dist/css/bootstrap.min.css";
import {Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
// import Navbar from "./components/Navbar";
import './App.css';



function App() {
  return (
    <div className="App">
    {/* <Navbar></Navbar> */}
    <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/home" element={<Home/>} />
    </Routes>
    </div>
  );
}

export default App;
