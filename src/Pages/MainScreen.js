import React from "react";
import AddNewAdmin from  '../component/Setting/AddNewAdmin'

import LastJob from "../Pages/LastJob";
import LastSanai3y from "../Pages/LastSanai3y";
import LastClient from "../Pages/LastClient";
import Setting from '../component/TopRate/TopRate';
import Notifection from "../component/Notfication/Notifection";

import './progress.css'
import Charts from "./Charts";
function MainScreen() {

  return (
    <>

    <div className="w-100">
        <Charts />
        <Setting/>
   
        {/* <Charts /> */}
        {/* <Charts /> */}
       
      </div>
      {/* tables and notifecation */}
    <div style={{ "overflow-x": "auto" }} className="d-flex col-comp">
      <div className="me-3">
        <LastClient />
        <LastSanai3y />
        <LastJob />
     {/* <AddNewAdmin/> */}
      </div>
      <div className="notification">
        <Notifection/>
      </div>

    </div>
    
    </>
  );
}

export default MainScreen;
