import React from 'react';
import "./single.scss";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import Chart from "../../Components/Charts/Charts";
import { useState } from "react";
import base_url from "../../Utils/Constants/Constants";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import RelatedUserInspectionList from '../List/RelatedUserInspectionList';


const SingleUser = () => {

    const {userId} = useParams();
    console.log(userId);

    const [data , setData] = useState();


    const LoadUser = async() => {
        const url = base_url + `/api/Authentication/GetSingleInspector?userId=${userId}`;
        const response = await axios.get(url);
        if(response.status === 200){
            setData(response.data);
            console.log("Success !");
        }else{
            console.log("Error !");
        }

    };

    useEffect(() => {

        LoadUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userId])
    

  return (
    <div className="single">
    <Sidebar />
    <div className="singleContainer">
      <Navbar />
      <div className="top">
        <div className="left">
          <div className="editButton">Edit</div>
          <h1 className="title">Information</h1>
          <div className="item">
            {/* <img
              src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
              alt=""
              className="itemImg"
            /> */}
           { data && <div className="details">
              <h1 className="itemTitle">{data.firstname} {data.lastname}</h1>
              <div className="detailItem">
                <span className="itemKey">Contact</span>
                <span className="itemValue">{data.contact}</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Id Type</span>
                <span className="itemValue">{data.idType}</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Id Number</span>
                <span className="itemValue">
                  {data.idNumber}
                </span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Inspections Made</span>
                <span className="itemValue">{data.inspections != null ? data.inspections.length : 0}</span>
              </div>
            </div>}
          </div>
        </div>
        <div className="right">
          <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
        </div>
      </div>
      <div className="bottom">
      <h1 className="title">Last Inspections</h1>
        <RelatedUserInspectionList text={userId}/>
      </div>
    </div>
  </div>
  );
}

export default SingleUser