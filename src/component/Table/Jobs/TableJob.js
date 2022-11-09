import "../Table.css";
import axios from "axios";
import _ from "lodash";
import {  FaTrashAlt } from "react-icons/fa";
import React, { useEffect, useState } from "react";
//////////////////constant//////////////////
const pageSize = 5;
const baseURL = "http://localhost:7000/Jobs/all";



// TAbleSanai3y
/////////////////commponent///////////////////

function TableJob() {
  const [data, setData] = useState([]);
  const [serch, setSearch] = useState("");
  const [pagenetdPost, setPage] = useState([]);
  const [currentPge, setCurrentPge] = useState('');
  const [order, setOrder] = useState("ASC");
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      // console.log(response.data.data);
      setData(response.data.data);
      console.log("efect");
      setPage(_(response.data.data).slice(0).take(pageSize).value());
      // console.log(pagenetdPost);
    });
  }, []);

console.log(currentPge)
  ////////////////////Sorting////////////////////
  const sorting = (col) => {
    if (order === "ASC") {
      
      const sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      // setPage(sorted);
      setPage(_(sorted).slice(0).take(pageSize).value());
      setOrder("DSC");
    }
    if (order === "DSC") {
      
      const sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      // setPage(sorted);
      setPage(_(sorted).slice(0).take(pageSize).value());
      setOrder("ASC");
    }
  };
  ///////////////////////pagination////////////////
  // console.log(pagenetdPost);

  const pageCount = pagenetdPost ? Math.ceil(data.length / pageSize) : 0;
  if (pageCount === 0) return null;
  const pages = _.range(1, pageCount + 1);
  // console.log(pages);
  const pagination = (pagnum) => {
    // console.log(pagnum);
    setCurrentPge(pagnum);
    // setData(pagnum)
    const startIndex = (pagnum ) * pageSize;
    const pagenetdPoste = _(data).slice(startIndex).take(pageSize).value();
    setPage(pagenetdPoste);
  // console.log(startIndex);

  };

  function deleteRow(id) {
    console.log(id);
    let jobs = data.filter((item) => item._id !== id);
    // setPage(jobs);
    setData([...jobs]);
    console.log(jobs);
    setPage(_(jobs).slice(0).take(pageSize).value());
    const token ="6360d23e1cadd7241e2c1049";
    // localStorage.setItem(token)
    console.log(jobs);
   
    axios.delete(`http://localhost:7000/jobs/delete/${id}`).then((res) => {});
  }
  return (
    <div className="resentOrder">
      <div className="cardHeadr">
        <h2>Jobs Register</h2>
        <input
          type="text"
          className="search"
          onChange={(ev) =>{
            const inputSearch=ev.target.value.toLocaleLowerCase().trim()
             setSearch(inputSearch)}}
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
              <td>Delete</td>
              <td>Details</td>
            </tr>
          </thead>
          <tbody>
            {pagenetdPost
              // .filter((item) => 
              // item.title.toLowerCase().includes(serch)||
              // item.address.toLowerCase().includes(serch)||
              // item.city.toLowerCase().includes(serch)||
              // item.status.toLowerCase().includes(serch)
              // )
              .map((item,index) => (
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
                    <  FaTrashAlt />
                    </button>
                  </td>
                  <td>
                  <button
                    className="app_di_img btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target={`#Taha${item._id}`}
                  >
                    Details
                  </button>
                </td>
                <div
                  className="modal modal-xl fade"
                  id={`Taha${item._id}`}
                  data-bs-backdrop="static"
                  data-bs-keyboard="false"
                  tabIndex="-1"
                  aria-labelledby="staticBackdropLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header edit_header">
                        <h1
                          className="modal-title fs-2"
                          id="staticBackdropLabel"
                        >
                          التفاصيل حول العميل
                        </h1>

                        <button
                          type="button"
                          className="btn-close edit_close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>

                      <div className="modal-body">
                        {/* data Snai3y In Details */}
                        <div className="some_edit_about_snai3y d-flex">
                          <div className="cards-body">
                          <div>
                              <h4>Image :</h4>
                              <img
                              width={150} 
                              // height={250}
                                className="img-thumbnail"
                                src={item.images}
                                alt=""
                              />
                            </div>
                            <div>
                              
                              <h4>title :</h4>
                              <h5>{item.title}</h5>
                            </div>
                            <div>
                              <h4>description :</h4>
                              <h5>{item.description}</h5>
                            </div>
                           
                            <div>
                              <h4>city:</h4>
                              <h5>{item.city}</h5>
                            </div>
                            <div>
                              <h4>address :</h4>
                              <h5>{item.address}</h5>
                            </div>
                          
                            <div>
                              <h4>category :</h4>
                              <h5 className="card-text">{item.category}</h5>
                            </div>
                            <div>
                              <h4>hiredDate :</h4>
                              <h5 className="card-title">{item.hiredDate}</h5>
                            </div>
                            <div>
                              <h4>status :</h4>
                              <h5>{item.status}</h5>
                            </div>
                            <div>
                              <h4>proposals :</h4>
                              <h5>{item.proposals}</h5>
                            </div>
                            <div>
                              <h4>Sanai3y Id :</h4>
                              <h5>{item.sanai3yId}</h5>
                            </div>
                            <div>
                              <h4>client Id :</h4>
                              <h5>{item.clientId}</h5>
                            </div>                                      
                          
                          </div>
                        </div>
                      </div>

                      <div className="modal-footer edit_footer_job p-0">
                        <button
                          type="button"
                          className="btn btn-secondary edit_close_button"
                          data-bs-dismiss="modal"
                        >
                          اغلاق
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                </tr>
              ))}
          </tbody>
        </table>
      )}
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {pages.map((page) => (
            <li>
              <p
                className="page-link btn btn-succes"
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
