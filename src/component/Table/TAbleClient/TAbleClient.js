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
const baseURL = "http://localhost:7000/client/all";
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
  if (pageCount === 0) return null;
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
    let Client = data.filter((item) => item._id !== id);
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
            <td>National ID</td>
            <td>Delete</td>
            <td>Details</td>
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
            .map((item,index) => (
              <tr key={index}>
                <td>{item.firstName}</td>
                <td>{item.email}</td>
                <td>{item.address}</td>
                <td>{item.gender}</td>
                <td>{item.nationalId}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteRow(item._id)}
                  >
                    Delete
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
                        <div className="some_edit_about_snai3y">
                          <div className="cards-body">
                          <div>
                              <h4 className="fw-bolder">Image :</h4>
                              <img
                              width={150} 
                              // height={250}
                                className="img-thumbnail"
                                src={item.img}
                                alt=""
                              />
                            </div>
                            <div>
                              <h4 className="fw-bolder">First Name :</h4>
                              <h5>{item.firstName}</h5>
                            </div>
                            <div>
                              <h4 className="fw-bolder">Last Name :</h4>
                              <h5>{item.lastName}</h5>
                            </div>
                           
                            <div>
                              <h4 className="fw-bolder">Phone Number :</h4>
                              <h5>{item.phoneNumber}</h5>
                            </div>
                            <div>
                              <h4 className="fw-bolder">Email :</h4>
                              <h5>{item.email}</h5>
                            </div>
                            <div>
                              <h4 className="fw-bolder">City :</h4>
                              <h5>اسوان</h5>
                            </div>
                            <div>
                              <h4 className="fw-bolder">National Id :</h4>
                              <h5 className="card-text">{item.nationalId}</h5>
                            </div>
                            <div>
                              <h4 className="fw-bolder">title :</h4>
                              <h5 className="card-title">{item.title}</h5>
                            </div>
                            <div>
                              <h4 className="fw-bolder">Age :</h4>
                              <h5>{item.age}</h5>
                            </div>
                            <div>
                              <h4 className="fw-bolder">Joined Date :</h4>
                              <h5>{item.joinedDate}</h5>
                            </div>
                            <div>
                              <h4 className="fw-bolder">Gender :</h4>
                              <h5>{item.gender}</h5>
                            </div>
                            <div>
                              <h4 className="fw-bolder">Rule :</h4>
                              <h5>{item.rule}</h5>
                            </div>
                            <div>
                              <h4 className="fw-bolder"> Address :</h4>
                              <h5>{item.address}</h5>
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

export default TAbleClient;
