import './Card.css'
import '../../Pages/Var.css'
import Topbar from './../topbar/Topbar';
import TAbleSanai3y from "../Table/TAbleSanai3y";
import TAbleClient  from '../Table/TAbleClient/TAbleClient';
import TableJob from '../Table/Jobs/TableJob';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import MainScreen from '../../Pages/MainScreen';
import { FaUserAlt,FaEye } from 'react-icons/fa';
import Notifection from '../Notfication/Notifection';


function Card() {
      return (
        <>
     
        <div className="card">
          <div className="card1 shadow ">
            <div>
              <div className="iconBox">
                <FaEye/>
              </div>
            <section>
                <h2 className="unmber">1,900</h2>
                <h2 className="namecard">Jops</h2>
            </section>
            </div>
          </div>
          <div className="card1 shadow">
            <div>
              <div className="iconBox">
              <FaUserAlt/>
              </div>
            <section >
                <h2 className="unmber">80.00</h2>
                <h2 className="namecard">Sanai3y</h2>
            </section>
            </div>
          </div>
          <div className="card1 shadow ">
            <div>
              <div className="iconBox">
              <FaUserAlt/>
              </div>
          <section>
                <h2 className="unmber">1,900</h2>
                <h2 className="namecard">Users</h2>
          </section>
            </div>
          </div>
         
        
          <Routes>
    <Route path="/"  element={<MainScreen  />} />
    <Route path="/Sanai3y" element={ < TAbleSanai3y  /> }/>
    <Route path="/Client" element={<TAbleClient />} />
    <Route path="/Job" element={<TableJob/>} />
    </Routes>
         
        </div>
        </>
      );
    }
export default Card;
