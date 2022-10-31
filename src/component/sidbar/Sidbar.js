import { NavLink,useNavigate } from "react-router-dom";
import "./Sidbar.css";
import { FaHome,FaSignOutAlt,FaChartPie,FaUserAlt,FaCommentAlt } from 'react-icons/fa';
function Sidbar() {
 
  function LogIn() {
   
    localStorage.removeItem("token")
    
  }
  return (
    <div className="navbar ">
      <ul>
        <li>
          <NavLink >
            <span className="icon" toggle="test">
              <ion-icon name="logo-apple"></ion-icon>
            </span>
            <span className="titel">brand Name</span>
          </NavLink>
        </li>

        <li>
          <NavLink >
            <span className="icon">
              
            <FaHome/>
            </span>
            <span className="titel ">Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/Dashboard">
            <span className="icon">
            <FaChartPie/>
            </span>
            <span className="titel ">Dash Board</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/Sanai3y">
            <span className="icon">
            <FaUserAlt/>
            </span>
            <span className="titel ">Sanai3y</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/Client">
            <span className="icon">
            <FaUserAlt/>
              </span>
            <span className="titel">Client</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/Job">
            <span className="icon">
            <FaUserAlt/>
            </span>
            <span className="titel">Jops</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="Job">
            <span className="icon">
            <FaCommentAlt/>
            </span>
            <span className="titel">Message</span>
          </NavLink>
        </li>
        <li>
          <NavLink>
            <span className="icon">
            <FaUserAlt/>
            </span>
            <span className="titel">Setting</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='/'
           onClick={() => {
            LogIn()
          }}
          >
            <span className="icon"
           
            >
              <FaSignOutAlt/>
            </span>
            <span className="titel">Log out</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
export default Sidbar;
