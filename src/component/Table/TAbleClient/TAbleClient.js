import '../Table.css';
import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
const baseURL = "http://localhost:7000/Client/all";
function TAbleClient() {
  const [data, setData] = useState([]);
  const [serch ,setSearch]=useState('');

useEffect(()=>{

  axios.get(baseURL).then((response) => {
    setData(response.data.Data);
    console.log("jjjjd")
  })
},[])  
  

  function deleteRow( id)
  {  console.log(id)
    axios.delete(`http://localhost:7000/Client/delete/${id}`)  
    .then(res => {  
      const jobs = data.filter(item => item._id !== id);  
      console.log(data)
      
      setData([...data]); 
      })  
    }
  return (
    <div className="resentOrder">
      <div className="cardHeadr">
        <h2>Client heloo baby Register</h2>
        <input 
     type='text'
     placeholder="Search About client"
      className="search"
      onChange={(ev)=>setSearch(ev.target.value)}
      />
      </div>
            <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Adress</td>
            {/* <td>Status</td> */}
            {/* <td>skills</td> */}
            {/* <td>Discration</td> */}
            <td>Phone</td>

            <td>gender</td>
            {/* <td>natinal Id</td> */}
            <td>Delet</td>
          </tr>
        </thead>
        <tbody>
        {data.filter((item)=>item.firstName.toLowerCase().includes(serch)).map((item) => (
         
            <tr key={item._id}>
              <td>{item.firstName}</td>
              <td>{item.email}</td>
              <td>{item.address}</td>
              {/* <td>{item.status}</td> */}
              {/* <td>{item.skills[0]}</td> */}
              {/* <td>{item.description}</td> */}
              {/* <td>{item.phoneNumber}</td> */}
              <td>{item.gender}</td>
              <td>{item.nationalId}</td>
              <button className="btn btn-danger" onClick={() => deleteRow(item._id)}>Delete</button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TAbleClient;
