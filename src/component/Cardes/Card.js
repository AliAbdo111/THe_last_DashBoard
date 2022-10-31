import './Card.css'
import '../../Pages/Var.css'
import Topbar from './../topbar/Topbar';
import TAbleSanai3y from "../Table/TAbleSanai3y";
import TAbleClient  from '../Table/TAbleClient/TAbleClient';
import TableJob from '../Table/Jobs/TableJob';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import MainScreen from '../../Pages/MainScreen';


function Card() {
      return (
        <>
     
        <div className="card">
          <div className="card1">
            <div>
              <div className="unmber">1,900</div>
              <div className="namecard">Jops</div>
              <div className="iconBox">
                <ion-icon name="eye-outline" />
              </div>
            </div>
          </div>
          <div className="card1">
            <div>
              <div className="unmber">80.00</div>
              <div className="namecard">Sna3y</div>
              <div className="iconBox">
                <ion-icon name="cart-outline" />
              </div>
            </div>
          </div>
          <div className="card1">
            <div>
              <div className="unmber">1,900</div>
              <div className="namecard">Users</div>
              <div className="iconBox">
                <ion-icon name="chatbubble-ellipses-outline" />
              </div>
            </div>
          </div>
          <div className="card1">
            <div>
              <div className="unmber">1,900</div>
              <div className="namecard">Users</div>
              <div className="iconBox">
                <ion-icon name="chatbubble-ellipses-outline" />
              </div>
            </div>
          </div>
          <Routes>
    <Route path="/" element={<MainScreen/>}/>
    <Route path="/Sanai3y" element={ < TAbleSanai3y  /> }/>
    <Route path="/Client" element={<TAbleClient />} />
    <Route path="/Job" element={<TableJob/>} />
    </Routes>
         
        </div>
        </>
      );
    }
export default Card;
