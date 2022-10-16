import React , { useEffect, useState } from "react";
import "./widget.scss";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import StackedLineChartOutlinedIcon from "@mui/icons-material/StackedLineChartOutlined";
import { AgricultureOutlined, PolicyOutlined } from "@mui/icons-material";
import axios from "axios";

const Widget = ({ type }) => {

  const [farmers, setFarmers] = useState([]);
  const [users, setUsers] = useState([]);
  
 

  const getFarmers = async () => {
    
    const response = await axios.get(
      "https://localhost:7066/api/Farmer/GetAllFarmers"
    );
    if ((await response).status === 200) {
      const data = (await response).data;
      setFarmers(data);
      console.log(farmers);
    } else {
      
      console.log("Error " + response.statusText);
    }
  };
  const getUsers = async () => {
   
    const response = await axios.get(
      "https://localhost:7066/api/Authentication/GetAllInspectors"
    );
    if (response.status === 200) {
      const data = response.data;
      setUsers(data);
      
      console.log(users);
    } else {
      
      console.log("Error " + response.status);
    }
  };

  useEffect(() => {
    getFarmers();
    getUsers();
    // eslint-disable-next-line
  }, []);


  let data;

  //temporary
  
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        numUsers:users.length,
        isMoney: false,
        link: "see all users",
        icon: <PersonOutlineOutlinedIcon className="icon" style={{
            color:"crimson",
            backgroundColor:"#D7D6D6"
        }}/>,
      };
      break;
    case "farmer":
      data = {
        title: "FARMERS",
        numFarmers:farmers.length,
        isMoney: false,
        link: "see all orders",
        icon: <AgricultureOutlined className="icon" style={{
            color:"#218380",
            backgroundColor:"#D5DDBC"
            
        }} />,
      };
      break;
    case "inspection":
      data = {
        title: "INSPECTIONS",
        isMoney: false,
        link: "View all inspections",
        icon: <PolicyOutlined className="icon" style={{
            color:"#565676",
            backgroundColor:"#D8DCFF"
        }} />,
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "see balance",
        icon: <StackedLineChartOutlinedIcon className="icon" style={{
            color:"#FDF5BF",
            backgroundColor:"#383D3B"
        }} />,
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.isMoney && " $" }{data.numFarmers}{data.numUsers}</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpOutlinedIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
