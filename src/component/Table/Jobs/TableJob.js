import "../Table.css";
import axios from "axios";
import _ from "lodash";
import React, { useEffect, useState } from "react";
const pageSize = 5;
const baseURL = "http://localhost:7000/Jobs/all";
function TableJob() {
  const [data, setData] = useState([]);
  const [serch, setSearch] = useState("");
  const [pagenetdPost, setPage] = useState([]);
  const [currentPge, setCurrentPge] = useState();

  // const []

  useEffect(() => {
    // invalid url will trigger an 404 error
    axios.get(baseURL).then((response) => {
      setData (response.data.data);
      //  console.log(response.data.data)
      setPage(_(response.data.data).slice(0).take(pageSize).value());
    });
  }, []);
  console.log(pagenetdPost);

  const pageCount = data ? Math.ceil(data.length/pageSize) : 0;
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);
  const pagination = (pagnum) => {
    console.log(pagnum)
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
  
    setData([...jobs]);
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
              <td> title</td>
              <td>city</td>
              <td>address</td>
              <td>status</td>
              <td>Delet</td>
            </tr>
          </thead>
          <tbody>
            {
             pagenetdPost.filter((item) => item.title.toLowerCase().includes(serch))
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
              <p class="page-link" 
              onClick={() => pagination(page)}>
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
