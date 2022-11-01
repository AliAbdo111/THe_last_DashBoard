import "../Table.css";
import axios from "axios";
import _ from "lodash";
import React, { useEffect, useState } from "react";
import {
  FaHome,
  FaSignOutAlt,
  FaChartPie,
  FaUserAlt,
  FaCommentAlt,
} from "react-icons/fa";

/////constanet/////
const pageSize = 5;
const baseURL = "http://localhost:7000/Client/all";
////commponent//////

function TAbleClient() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [pagenetdPost, setPage] = useState([]);
  const [currentPge, setCurrentPge] = useState("");
  const [order, setOrder] = useState("ASC");

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setData(response.data.Data);
      setPage(_(response.data.Data).slice(0).take(pageSize).value());
    });
  }, []);
  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setPage(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setPage(sorted);
      setOrder("ASC");
    }
  };

  /////////////////////pagination/////////////////
  const pageCount = pagenetdPost ? Math.ceil(data.length / pageSize) : 0;
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);
  const pagination = (pagnum) => {
    console.log(pagnum);
    setCurrentPge(pagnum);
    // setData(pagnum)
    const startIndex = (pagnum - 1) * pageSize;
    const pagenetdPoste = _(data).slice(startIndex).take(pageSize).value();
    setPage(pagenetdPoste);
  };
  /////////////////////////////delet function///////////////////////////////////
  function deleteRow(id) {
    // console.log(id);
    const Client = data.filter((item) => item._id !== id);
    setData([...Client]);
    axios.delete(`http://localhost:7000/Client/delete/${id}`).then((res) => {});
  }
  return (
    <div className="resentOrder">
      <div className="cardHeadr">
        <h2>Client Register</h2>
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
            <td onClick={() => sorting("firstName")}>Name</td>
            <td onClick={() => sorting("email")}>Email</td>
            <td onClick={() => sorting("address")}>Adress</td>
            <td onClick={() => sorting("gender")}>gender</td>
            <td>Phone</td>
            <td>Delet</td>
          </tr>
        </thead>
        <tbody>
          {pagenetdPost
            .filter(
              (item) =>
                item.firstName.toLowerCase().includes(search) ||
                item.address.toLowerCase().includes(search) ||
                item.email.toLowerCase().includes(search) ||
                item.gender.toLowerCase().includes(search)
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
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          {pages.map((page) => (
            <li>
              <p
                class="page-link btn btn-succes"
                onClick={() => pagination(page)}
              >
                {page}
              </p>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default TAbleClient;
