
import XYPlot from 'reactochart/XYPlot';
import XAxis from 'reactochart/XAxis';
import YAxis from 'reactochart/YAxis';
import BarChart from 'reactochart/BarChart';
import LineChart from 'reactochart/LineChart';
import React, { useEffect, useState } from "react";
import axios from 'axios';
import 'reactochart/styles.css';
import colors from './../../node_modules/d3-scale-chromatic/src/categorical/Accent';
import { set } from 'lodash';
const baseURL = "http://localhost:7000/Jobs/dates";

        const Charts = (props) => {

          const [Data,setData]=useState([])
          useEffect(() => {
            axios.get(baseURL).then((response) => {
              // console.log(response.data.data);

              setData(response.data.Data)
              console.log(response.data.Data);
            });


          }, []);

         
         
   




//y is count job
//x is the day create jobs
            // const data = [
                
            //   {x: 1, y: 2, z: 0},
            //   {x: 2, y: 10, z: 12},
            //   {x: 4, y: 15, z: 13},
            //   {x: 6, y: 15, z: 13},
            //   {x: 8, y: 17, z: 14},
            //   {x: 10, y: 20, z: 15},
            //   {x: 12, y: 23, z: 16},
            //   {x: 14, y: 25, z: 16},
            //   {x: 16, y: 27, z: 16},
            //   {x: 18, y: 30, z: 16},
            //   {x:20 ,y:34 ,z:17},
            // ];
            return <XYPlot width={1000} height={600} >
              <XAxis showGrid={true} title="Days since Jobs" />
              <YAxis title="Count"/>
              <BarChart
                data={Data}
                x={d => d.date}
                y={d => d.totalJobs}
                barThickness={10}
                barStyle={{fill:"#001253"}}
              />
          
              <LineChart
                data={Data}
                x={d => d.date}
                y={d => d.totalJobs}
                lineStyle={{stroke: '#FFDE00', strokeWidth: 3}}
              />
            </XYPlot>
          };
          
        
    

export default Charts