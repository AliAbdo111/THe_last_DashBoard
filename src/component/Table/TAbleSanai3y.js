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
      console.log("aaaaa")
    });
  }, []);
 
  // function Detaiels(id) {
  //   const jobs = data.filter((item) => item._id === id);
  //   setData([...jobs])
  // }
  function deleteRow(id) {
    console.log(id);
    
    axios.delete(`http://localhost:7000/sanai3y/delete/${id}`)
    .then(res => {
     let  jobs= data.filter((item) => item._id !== id);
      console.log(jobs)
      console.log(res.data)
      console.log(jobs)
      // console.log(data)
      setData([...data]);
      })
      
  }
  // console.log(data);

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
            <td>Status</td>
            <td>skills</td>
            {/* <td>Discration</td> */}
            <td>Delet</td>
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
                <td>{item.skills[0]}</td>
                {/* <td>{item.description}</td> */}
                <button
                  className="btn btn-danger"
                  onClick={() => deleteRow(item._id)}
                >
                  Delete
                </button>
                <button
                  // onClick={() => Detaiels(item._id)}

                  className="app_di_img"
                  data-bs-toggle="modal"
                  data-bs-target={`#Taha${item._id}`}
                >
                  Detatiels
                </button>
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
                          className="modal-title fs-5"
                          id="staticBackdropLabel"
                        >
                          التفاصيل حول العمل
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
                          <div className="row">
                            <div className="col-1"></div>

                            <div className="col-5 p-0">
                              <div className="edit_data_about_job">
                                <h5>{`${item.firstName} ${item.email}`}</h5>
                                <p>اسوان</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="card p-0 ">
                            <div className=" g-0 px-3 py-2">
                              <div className="col-md-8">
                                <div className="card-body">
                                  <h5 className="card-title">{item.title}</h5>
                                  <p className="card-text">{item.nationalId}</p>
                                </div>
                              </div>

                              <div className="col-md-4">
                                <div className="row">
                                  <div className="col-6">
                                    <img
                                      className="img-thumbnail"
                                      src={item.img}
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
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
