import "../Table.css";
import axios from "axios";
import _ from "lodash";
import React, { useEffect, useState } from "react";
//////////////////constant//////////////////
const pageSize = 5;
const baseURL = "http://localhost:7000/Jobs/all";

/////////////////commponent///////////////////

function TableJob() {
  const [data, setData] = useState([]);
  const [serch, setSearch] = useState("");
  const [pagenetdPost, setPage] = useState([]);
  const [currentPge, setCurrentPge] = useState('');
  const [order, setOrder] = useState("ASC");
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setData(response.data.data);
      console.log("efect");
      setPage(_(response.data.data).slice(0).take(pageSize).value());
    });
  }, []);


  ////////////////////Sorting////////////////////
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
  ///////////////////////pagination////////////////
  console.log(pagenetdPost);

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

  function deleteRow(id) {
    console.log(id);
    const jobs = data.filter((item) => item._id !== id);
    console.log(jobs);
    setPage(jobs);
    // setData([...jobs]);
    axios.delete(`http://localhost:7000/Jobs/delete/${id}`).then((res) => {});
  }
  return (
    <div className="resentOrder">
      <div className="cardHeadr">
        <h2>Jobs Register</h2>
        <input
          type="text"
          className="search"
          onChange={(ev) => setSearch(ev.target.value)}
        />
      </div>
      {!data ? (
        "not found data"
      ) : (
        <table>
          <thead>
            <tr>
              <td> Client Name </td>
              <td onClick={() => sorting("title")}> title</td>
              <td onClick={() => sorting("city")}>city</td>
              <td onClick={() => sorting("address")}>address</td>
              <td onClick={() => sorting("status")}>status</td>
              <td>Delet</td>
            </tr>
          </thead>
          <tbody>
            {pagenetdPost
              .filter((item) => 
              item.title.toLowerCase().includes(serch)||
              item.address.toLowerCase().includes(serch)||
              item.city.toLowerCase().includes(serch)||
              item.status.toLowerCase().includes(serch)
              )
              .map((item) => (
                <tr key={item._id}>
                  <td>{item.clientId}</td>
                  <td>{item.title}</td>
                  <td>{item.city}</td>
                  <td>{item.address}</td>
                  <td>{item.status}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        deleteRow(item._id);
                      }}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
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
export default TableJob;
