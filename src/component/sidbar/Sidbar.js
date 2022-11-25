import { NavLink, useNavigate } from "react-router-dom";
import "./Sidbar.css";

import { FaFirstOrderAlt} from "react-icons/fa";

import {
  FaHome,
  FaSignOutAlt,
  FaChartPie,
  FaUserAlt,
  FaCommentAlt,
} from "react-icons/fa";
function Sidbar() {
  function LogIn() {
    localStorage.removeItem("token");
  }
  let navbar=document.getElementsByClassName('navbar')
  return (
  
     
    <div className="navbar ">
      <ul>
        <li>
          <NavLink>
            <span className="titel px-5 ">
              <img height={90} src={require("../../image/logo.png")} />
            </span>
          </NavLink>
        </li>

        <li>
          <NavLink>
            <span className="icon">
              <FaHome />
            </span>
            <span className="titel ">Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/Dashboard">
            <span className="icon">
              <FaChartPie />
            </span>
            <span className="titel ">Dash Board</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/Sanai3y">
            <span className="icon">
              <FaUserAlt />
            </span>
            <span className="titel ">Sanai3y</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/Client">
            <span className="icon">
              <FaUserAlt />
            </span>
            <span className="titel">Client</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/Job">
            <span className="icon">
              <FaUserAlt />
            </span>
            <span className="titel">Jops</span>
          </NavLink>
        </li>
      
        <li>
          <NavLink to="DropDwoin">

            <span className="icon">

              <FaUserAlt />
    
            </span>
            <span className="titel">Setting</span>
          </NavLink>
  
        </li>
        <li>
          <NavLink
            to="/"
            onClick={() => {
              LogIn();
            }}
          >
            <span className="icon">
              <FaSignOutAlt />
            </span>
            <span className="titel">Log out</span>
          </NavLink>
        </li>
          
      </ul>
    </div>
  );
}
export default Sidbar;
