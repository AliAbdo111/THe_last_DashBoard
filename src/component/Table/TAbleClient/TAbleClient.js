import "../Table.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
const baseURL = "http://localhost:7000/Client/all";
function TAbleClient() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setData(response.data.Data);
      console.log("jjjjd");
    });
  }, []);

  function deleteRow(id) {
    console.log(id);

    const jobs = data.filter((item) => item._id !== id);
    console.log(jobs);

    setData([...jobs]);
    axios.delete(`http://localhost:7000/Client/delete/${id}`).then((res) => {});
  }
  return (
    <div className="resentOrder">
      <div className="cardHeadr">
        <h2>Client heloo baby Register</h2>
        <input
          type="text"
          placeholder="Search About client"
          className="search"
          onChange={(ev) => setSearch(ev.target.value)}
        />
      </div>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Adress</td>
            <td>Phone</td>
            <td>gender</td>
            <td>Delet</td>
          </tr>
        </thead>
        <tbody>
          {data
            .filter(
              (item) =>
                item.firstName.toLowerCase().includes(search) ||
                item.address.toLowerCase().includes(search)
            )
            .map((item) => (
              <tr key={item._id}>
                <td>{item.firstName}</td>
                <td>{item.email}</td>
                <td>{item.address}</td>

                <td>{item.gender}</td>
                <td>{item.nationalId}</td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteRow(item._id)}
                >
                  Delete
                </button>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default TAbleClient;
