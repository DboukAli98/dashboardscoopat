import axios from 'axios';
import React from 'react';
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import Chart from "../../Components/Charts/Charts";
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import base_url from '../../Utils/Constants/Constants';
import RelatedInspectionList from "../List/RelatedInspectionList";
import FarmerRelatedInspectionList from '../List/FarmerRelatedInspectionList';
import { Circles } from "react-loader-spinner";
import Error from '../../Utils/UserPrompts/Error';



const SingleFarmer = () => {
  const {farmerId} = useParams();
  const [data , setData] = useState();
  const [imgData , setImgData] = useState();
  const [farms , setFarms] = useState();
  const [notFound , setNotFound]= useState(false);

  //prompts declarations
  const [loading , setLoading] = useState(false);
  const [error , setError] = useState(false);
  
  
  const LoadFarmer = async () => {

    const url = base_url + `/api/Farmer/GetSingleFarmer?farmerId=${farmerId}`;
    const response = await axios.get(url);
    if(response.status === 200){
        setData(response.data);
        console.log("Success !");
    }else{
        console.log("Error ! " + response.statusText);
    }
  };

  const LoadFarmerImage = async () => {
    setLoading(true);
    try {
      const url = base_url + `/api/Farmer/GetFarmerImages?farmerId=${farmerId}`;
    const response = await axios.get(url);
    if(response.status === 200){
      setLoading(false);
      const data = response.data;
      setImgData(data);

    }else{
      if(response.statusText === "No Content"){
        setNotFound(true);

      }else{
      setLoading(false);
      setError(true);
      console.log("Error");
      }
    }
      
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log("Error");
      
    }
    
  }

  const LoadFarmerFarms = async () => {
    setLoading(true);
    try {
      const url = base_url + `/api/Farmer/GetFarmerFarm?farmerId=${farmerId}`;
      const response = await axios.get(url);
      if(response.status === 200){
        setLoading(false);
        const data = response.data;
        setFarms(data);
      }else{
        setLoading(false);
        console.log("Error");
      }
      
    } catch (error) {
      setLoading(false);
      console.log("Error");
      
    }
  } 

  useEffect(() => {
    LoadFarmer();
    LoadFarmerImage();
    LoadFarmerFarms();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [farmerId]);
  
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
             {loading && <Circles
                      height="20"
                      width="20"
                      radius="9"
                      color="#06283D"
                      ariaLabel="loading"
                    />}
             {imgData && <img
                src={"data:image/jpg;base64,"+imgData}
                alt="Picture"
                className="itemImg"
              />}
              {notFound && <p>No Image</p>}
              {error && <Error text={"Error Loading Image"}/>}
             { data && <div className="details">
                <h1 className="itemTitle">{data.farmerCode}</h1>
                <div className="detailItem">
                  <span className="itemKey">Farmer Name</span>
                  <span className="itemValue">{data.firstName} {data.lastName} </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">BirthDate</span>
                  <span className="itemValue">{data.birthDate.substring(0, 4)}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Section</span>
                  <span className="itemValue">
                    {data.region}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Contact</span>
                  <span className="itemValue">{data.contact}</span>
                </div>
                {farms && 
                  <div className="detailItem">
                  <span className="itemKey">Total Farms</span>
                  <span className="itemValue">{farms.length}</span>
                </div>
                }
              </div>}
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Inspections</h1>
          <FarmerRelatedInspectionList text={farmerId}/>
        </div>
      </div>
    </div>
  );
}

export default SingleFarmer;