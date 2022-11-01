import React from 'react'
import TAbleSanai3y from "../component/Table/TAbleSanai3y";
import TAbleClient  from '../component/Table/TAbleClient/TAbleClient';
import TableJob from '../component/Table/Jobs/TableJob';
function MainScreen() {
  return (
    <div style={{"overflow-x": 'auto'}}>
          <TAbleClient/>
         <TAbleSanai3y/>
         <TableJob/>

    </div>
  )
}

export default MainScreen