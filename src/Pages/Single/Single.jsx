import "./single.scss";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import Chart from "../../Components/Charts/Charts";
import { useState } from "react";
import base_url from "../../Utils/Constants/Constants";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import RelatedInspectionList from "../List/RelatedInspectionList";

const Single = () => {

  const {farmId} = useParams();
  console.log(farmId);
  

  const [data , setData] = useState();

  const LoadFarm = async() => {
    const url = base_url + `/api/Farm/GetSingleFarm?farmId=${farmId}`;
    const response = await axios.get(url);
    if(response.status === 200){
      setData(response.data);
      console.log("Success !");
      
    }else {
      console.log("Failed !");
      console.log(axios.AxiosError);
    }

  };

  useEffect(() => {

    LoadFarm();
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
            <h1 className="title">Information</h1>
            <div className="item">
              {/* <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              /> */}
             { data && <div className="details">
                <h1 className="itemTitle">{data.farmCode}</h1>
                <div className="detailItem">
                  <span className="itemKey">Total Area</span>
                  <span className="itemValue">{data.totalArea} ha</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Lattitude</span>
                  <span className="itemValue">{data.lattitude}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Longitude</span>
                  <span className="itemValue">
                    {data.longtitude}
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
          <RelatedInspectionList text={farmId}/>
        </div>
      </div>
    </div>
  );
};

export default Single;