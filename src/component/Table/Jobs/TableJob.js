// import "../Jobs/TableJob.css";
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// const baseURL = "http://localhost:7000/Jobs/all";
// function TableJob() {
//   const [data, setData] = useState([]);
//   const [serch ,setSearch]=useState('')
//   React.useEffect(() => {
//     // invalid url will trigger an 404 error
//     axios.get(baseURL).then((response) => {
//       setData(response.data.data);
//    console.log(data)
//     }, []);
//   });
  
//   function del(index)
//   {
//     setData((prev)=>prev.filter((item)=>item._id!==index));
//   }
//   function edit(value) {}

//   return (
//     <div className="resentOrder">
//       <div className="cardHeadr">
//         <h2>Jobs Register</h2>
//      <input 
//      type='text'
//       className="search"
//       onChange={(ev)=>setSearch(ev.target.value)}
//       />
//       </div>
//       <table>
//         <thead>
//           <tr>
//             <td>Client Name</td>
//             <td>title</td>
//             <td>description</td>
//             <td>city</td>
//             <td>address</td>
//             <td>category</td>
//             <td>status</td>
//             <td>Delet</td>
//           </tr>
//         </thead>
//         <tbody>

//           {data.filter((item)=>item.title.toLowerCase().includes(serch)).map((item) => (
//             <tr key={item._id}>
//                 <td>{item.clientId}</td>
//               <td>{item.title}</td>
//               <td>{item.description}</td>
//               <td>{item.city}</td>
//               <td>{item.address}</td>
//               <td>{item.category}</td>
//               <td>{item.status}</td>
           
//               <td>
//                 <button
//                   className="btn btn-danger"
//                   onClick={() => {
//                     del(item._id);
//                   }}
//                 >
//                   delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
import React from 'react';     
import axios from 'axios';  
 import '../Table.css'
export default class TableJob extends React.Component {  
  state = {  
    jobs: []  
  }  
  componentDidMount() {  
    axios.get(`http://localhost:7000/Jobs/all`)  
      .then(res => {  
        const jobs= res.data.data;  
        this.setState({ jobs });  
      })  
  }  
    
  deleteRow(id, e){  
    axios.delete(`http://localhost:7000/Jobs/delete/${id}`)  
      .then(res => {  
        console.log(res);  
        console.log(res.data);  
        const jobs = this.state.jobs.filter(item => item.id !== id);  
        this.setState({ jobs });  
      })  
    
  }  
    
  render() {  
    return (  
      <div className='main'>  
        <h1>All jobs Posted </h1>  
    
        <table className="table table-bordered">  
            <thead>  
              <tr>  
                  <th>ID</th>  
                  <th>title</th>  
                  <th>description</th>  
                  <th>Action</th>  
              </tr>  
            </thead>  
    
            <tbody>  
              {this.state.jobs.map((post) => (  
                <tr>  
                  <td>{post._id}</td>  
                  <td>{post.title}</td>  
                  <td>{post.description}</td>  
                  <td>  
                    <button className="btn btn-danger" onClick={(e) => this.deleteRow(post._id, e)}>Ditaiels</button>  
                  </td> 
                  <td>  
                    <button className="btn btn-primary" onClick={(e) => this.deleteRow(post._id, e)}>Delete</button>  
                  </td>  

                </tr>  
              ))}  
            </tbody>  
    
        </table>  
      </div>  
    )  
  }  
}  
// export default TableJob;
