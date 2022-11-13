import React from "react";
import TAbleSanai3y from "../component/Table/TAbleSanai3y";
import TAbleClient from "../component/Table/TAbleClient/TAbleClient";
import TableJob from "../component/Table/Jobs/TableJob";
import Setting from '../component/Setting/Setting';
import Notifection from "../component/Notfication/Notifection";

import './progress.css'
// import Charts from "./Charts";
function MainScreen() {

  return (
    <>

    <div className="w-100">
        <Setting/>
        {/* <Charts /> */}
        {/* <Charts /> */}
        {/* <Charts /> */}
       
      </div>
      {/* tables and notifecation */}
    <div style={{ "overflow-x": "auto" }} className="d-flex col-comp">
      <div className="me-3">
        <TAbleClient />
        <TAbleSanai3y />
        <TableJob />
      </div>
      <div className="notification">
        <Notifection/>
      </div>

    </div>
    
    </>
  );
}

export default MainScreen;
