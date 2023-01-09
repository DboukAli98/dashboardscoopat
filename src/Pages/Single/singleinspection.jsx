import "./single.scss";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import Chart from "../../Components/Charts/Charts";
import { useState } from "react";
import base_url from "../../Utils/Constants/Constants";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleInspection = () => {

  const {inspectionId} = useParams();
  console.log(inspectionId);

  const [data , setData] = useState();



  const LoadInspection = async() => {
    const url = base_url + `/api/Inspections/GetSingleInspection?inspectionId=${inspectionId}`;
    const response = await axios.get(url);
    if(response.status === 200){
      setData(response.data);
      console.log(data);
      console.log("Success !");
      
    }else {
      console.log("Failed !");
      console.log(axios.AxiosError);
    }

  };

  useEffect(() => {

    LoadInspection();
   // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="single">
    <Sidebar />
    <div className="singleContainer">
      <Navbar />
      <div className="top">
        <div className="left">
          <div className="editButton">Edit</div>
          <h1 className="title">General Information</h1>
          <div className="item">
            {/* <img
              src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
              alt=""
              className="itemImg"
            /> */}
           { data && <div className="details">
              <h1 className="itemTitle">{data.inspectionId}</h1>
              <div className="detailItem">
                <span className="itemKey">Inspector</span>
                <span className="itemValue">{data.employee.firstname} {data.employee.lastname} </span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Date Of Inspection</span>
                <span className="itemValue">{data.dateOfInspection.substring(0, 10)}</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Assesment</span>
                <span className="itemValue">{data.assesment != null ? data.assesment.nonConformity : "no assesment"}</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Farmer</span>
                <span className="itemValue">
                  {data.farmer.farmerCode}
                </span>
              </div>
              
            </div>}
          </div>
        </div>
        <div className="right">
          <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
        </div>
      </div>
     

     
    </div>
    
  </div>
  
  )
}

export default SingleInspection;