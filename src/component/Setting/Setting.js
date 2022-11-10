import React, { useEffect, useState } from "react";
import axios from "axios";
import './Setting.css'
function Setting() {
  const baseURLsanai3y = "http://localhost:7000/sanai3y/all";
  const [datasanai3y, setDatasanai3y] = useState([]);
  const [dataclient, setDataclient] = useState([]);
  useEffect(() => {
    axios.get(baseURLsanai3y).then((response) => {
      setDatasanai3y(response.data.Data);
      // setPage(_(response.data.Data).slice(0).take(pageSize).value());
    });   
  }, []);
  const baseURLclient = "http://localhost:7000/client/all";
  useEffect(() => {
    axios.get(baseURLclient).then((response) => {
      setDataclient(response.data.Data);
      // setPage(_(response.data.Data).slice(0).take(pageSize).value());
    });   
  }, []);

  return (

    <div className="row">
      <div className="mb-4 col-md-6 col-12">
    <div className="shadow rounded-3">
      <div className="border-bottom border-2 card-header bg-light ">
        <h2 className="fs-5 fw-bold mb-0 p-3">New Sanai3y </h2>
      </div>
      <div className="py-0 px-0 bg-light card-body ">
        <div className="list-group-flush list-group">
     {  datasanai3y.slice(1).slice(-5).reverse().map((item,index) => (
       <div className="bg-light border-bottom py-3 px-3 list-group-item show-data"
       key={index}
       >
       <div className="align-items-center row">
         <div className="col-auto">
           
             <img
               src={item.img}
               className="m-0 rounded avatar-md"
               width={50}
               height={50}
             />
           
         </div>
         <div className="px-0 col-auto">
           <h4 className="fs-6 text-dark mb-0">
            
              {item.firstName+" "+item.lastName}
             
           </h4>
           <small>{item.skills}</small>
         </div>
         <div className="text-end col">
           <span className="fs-6 fw-bolder text-dark">$1834</span>
         </div>
       </div>
     </div>
    ))   }
     
        </div>
      </div>
    </div>
  </div>
    <div className="mb-4 col-md-6 col-12">
    <div className="shadow cards rounded-3">
      <div className="border-bottom border-2 card-header bg-light">
        <h2 className="fs-5 fw-bold mb-0 p-3">New Client </h2>
      </div>
      <div className="py-0 px-0 bg-light card-body">
        <div className="list-group-flush list-group">
          {dataclient.slice(1).slice(-5).reverse().map((item,index)=>(

          <div className="bg-light border-bottom py-3 px-3 list-group-item show-data"
          key={index}
          >
            <div className="align-items-center row">
              <div className="col-auto">
                
                  <img
                    src={item.img}
                    className="m-0 rounded avatar-md"
                    width={50}
                    height={50}
                  />
                
              </div>
              <div className="px-0 col-auto">
                <h4 className="fs-6 text-dark mb-0">
                 
                {item.firstName+" "+item.lastName}
                  
                </h4>
                <small>{item.rule}</small>
              </div>
              <div className="text-end col">
                <span className="fs-6 fw-bolder text-dark">$1834</span>
              </div>
            </div>
          </div>
          ))}
   
        </div>
      </div>
    </div>
  </div>
    </div>
  );
}

export default Setting;
