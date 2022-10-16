import React from "react";
import UserDatatable from "../../Components/Datatable/UserDatatable";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./list.scss";



const UserList = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <UserDatatable />
      </div>
    </div>
  );
};

export default UserList;
