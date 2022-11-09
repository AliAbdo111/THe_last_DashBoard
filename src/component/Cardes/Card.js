import React, { useEffect, useState } from "react";
import axios from "axios";
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
import CountUp from 'react-countup';

function Card() {
  const JobUrl = "http://localhost:7000/Jobs/all";
  const clientUrl = "http://localhost:7000/client/all";
  const Sanai3yUrl = "http://localhost:7000/sanai3y/all";
  const [dataJob, setDataJob] = useState([]);
  const [dataClient, setDataClient] = useState([]);
  const [dataSanai3y, setDataSanai3y] = useState([]);

  useEffect(() => {
    axios.get(JobUrl).then((response) => {
      // console.log(response.data.data);
      setDataJob(response.data.data.length);
    });
    axios.get(clientUrl).then((response) => {
      // console.log(response.data.Data);
      setDataClient(response.data.Data.length);
    });
    axios.get(Sanai3yUrl).then((response) => {
      // console.log(response.data.Data);
      setDataSanai3y(response.data.Data.length);
    });
  }, []);
      return (
        <>
     
        <div className="card">
          <div className="card1 shadow ">
            <div>
              <div className="iconBox">
                <FaEye/>
              </div>
            <section>
                <h2 className="unmber"><CountUp end={dataJob} useEasing="true" duration={2}  /></h2>
                <h2 className="namecard">Jops</h2>
            </section>
            </div>
          </div>
          <div className="card1 shadow" style={{background: "linear-gradient(90deg,#90caf9,#047edf 99%)"}}>
            <div>
              <div className="iconBox">
              <FaUserAlt/>
              </div>
            <section >
                <h2 className="unmber"><CountUp end={dataSanai3y} useEasing="true" duration={1}  /></h2>
                <h2 className="namecard">Sanai3y</h2>
            </section>
            </div>
          </div>
          <div className="card1 shadow " style={{background: "linear-gradient(90deg,#ffbf96,#fe7096)"}}>
            <div>
              <div className="iconBox">
              <FaUserAlt/>
              </div>
          <section>
                <h2 className="unmber"><CountUp end={dataClient} useEasing="true" duration={1}  /></h2>
                <h2 className="namecard">Client</h2>
          </section>
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
