
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
const baseURL = "http://localhost:7000/Jobs/all";

        const Charts = (props) => {

          const [Data,setData]=useState([])
          useEffect(() => {
            axios.get(baseURL).then((response) => {
              // console.log(response.data.data);
              setData(response.data.data)
              // console.log(pagenetdPost);
            });


          }, []);
          Data.map((item)=>{
            const dd= item.hiredDate
            const arrOfDateJob=[]
            arrOfDateJob.push(dd)
            
            console.log(arrOfDateJob.length)


          })
          const countData=Data.length
          // console.log(countData)




//y is count job
//x is the day create jobs
            const data = [
                {dd:1 ,y:countData ,z:0},
              // {x: 1, y: 2, z: 0},
              // {x: 5, y: 22, z: 12},
              // {x: 6, y: 26, z: 13},
              // {x: 7, y: 26, z: 14},
              // {x: 10, y: 32, z: 0},
              // {x: 30, y: 10, z: 0},
              // {x:30 ,y:30 ,z:0},
            ];
            return <XYPlot width={1000} height={600} colors={'#9B0000'}>
              <XAxis showGrid={false} title="Days since Jobs" />
              <YAxis title="Count"/>
              <BarChart
                data={data}
                x={d => d.x}
                y={d => d.y}
                barThickness={10}
                barStyle={{fill:"#9B0000"}}
              />
              <LineChart
                data={data}
                x={d => d.x}
                y={d => d.y}
                lineStyle={{stroke: '#000B49', strokeWidth: 5}}
              />
              <LineChart
                data={data}
                x={d => d.x}
                y={d => d.z}
                lineStyle={{stroke: '#9B0000', strokeWidth: 3}}
              />
            </XYPlot>
          };
          
        
    

export default Charts