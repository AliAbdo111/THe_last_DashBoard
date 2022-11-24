
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
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

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
            return( 
            <>
            <XYPlot width={1000} height={600} >
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
            

</>         ) };
          
        
  export default Charts       ;
          

// import React from 'react';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Filler,
//   Legend,
// } from 'chart.js';
// import { Line } from 'react-chartjs-2';
// // import faker from 'faker';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Filler,
//   Legend
// );

// export const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: 'top' ,
//     },
//     title: {
//       display: true,
//       text: 'Chart.js Line Chart',
//     },
//   },
// };

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

// export const data = {
//   labels,
//   // datasets: [
//   //   {
//   //     fill: true,
//   //     label: 'Dataset 2',
//   //     data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//   //     borderColor: 'rgb(53, 162, 235)',
//   //     backgroundColor: 'rgba(53, 162, 235, 0.5)',
//   //   },
//   // ],
// };

// export function Charts() {
//   return <Line options={options} data={data} />;
// }
// export default Charts 