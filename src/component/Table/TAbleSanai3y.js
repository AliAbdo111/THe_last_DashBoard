import "./Table.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
const baseURL = "http://localhost:7000/sanai3y/all";
function TAbleSanai3y() {
  const [data, setData] = useState([]);
  const [serch, setSearch] = useState("");
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setData(response.data.Data);
      // console.log("aaaaa");
    });
  }, []);
  function deleteRow(id) {
      // console.log(id);
      let sanai3y = data.filter((item) => item._id !== id);
      setData([...sanai3y]);
      axios.delete(`http://localhost:7000/sanai3y/delete/${id}`)
      .then((res) => {});
  }

  return (
    <div className="resentOrder">
      <div className="cardHeadr">
        <h2> Sanai3y Register</h2>
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
            <td>Address</td>
            <td>Status</td>
            <td>skills</td>
            <td>Delete</td>
            <td>Details</td>
          </tr>
        </thead>
        <tbody>
          {data
            .filter((item) => item.firstName.toLowerCase().includes(serch))
            .map((item) => (
              <tr key={item._id}>
                <td>{item.firstName}</td>
                <td>{item.email}</td>
                <td>{item.address}</td>
                <td>{item.status}</td>
                <td>{item.skills}</td>
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
                          التفاصيل حول الصنايعى
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
                              <h4>Image :</h4>
                              <img
                              width={150} 
                              style={{display:'block'}}
                                className="img-thumbnail"
                                src={item.img}
                                alt=""
                              />
                            </div>
                            <div>
                              <h4>First Name :</h4>
                              <h5>{item.firstName}</h5>
                            </div>
                            <div>
                              <h4>Last Name :</h4>
                              <h5>{item.lastName}</h5>
                            </div>
                           
                            <div>
                              <h4>Phone Number :</h4>
                              <h5>{item.phoneNumber}</h5>
                            </div>
                            <div>
                              <h4>Email :</h4>
                              <h5>{item.email}</h5>
                            </div>
                            <div>
                              <h4>City :</h4>
                              <h5>اسوان</h5>
                            </div>
                            <div>
                              <h4>National Id :</h4>
                              <h5 className="card-text">{item.nationalId}</h5>
                            </div>
                            <div>
                              <h4>title :</h4>
                              <h5 className="card-title">{item.title}</h5>
                            </div>
                            <div>
                              <h4>Age :</h4>
                              <h5>{item.age}</h5>
                            </div>
                            <div>
                              <h4>Joined Date :</h4>
                              <h5>{item.joinedDate}</h5>
                            </div>
                            <div>
                              <h4>Gender :</h4>
                              <h5>{item.gender}</h5>
                            </div>
                            <div>
                              <h4>Rule :</h4>
                              <h5>{item.rule}</h5>
                            </div>
                            <div>
                              <h4> Address :</h4>
                              <h5>{item.address}</h5>
                            </div>
                            <div>
                              <h4> Skills :</h4>
                              <h5>{item.skills}</h5>
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
    </div>
  );
}

export default TAbleSanai3y;
