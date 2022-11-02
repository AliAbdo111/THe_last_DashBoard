import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./Pages/Dashboard";
import LoginPAge from "./Pages/login";
// import { IconName } from "react-icons/fa";
import Sidbar from "./component/sidbar/Sidbar";
function App() {
  let token = localStorage.getItem("token");
  return (
    <>
    
    <Routes>
    <Route path="/" element={<LoginPAge />} />
    <Route path="/Dashboard" element={<Dashboard />}></Route>
    <Route path="*" element={< Dashboard/>} /> 
  </Routes>
  </>
  );
}

export default App;
