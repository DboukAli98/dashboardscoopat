import React from 'react';
import "./list.scss";
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import FarmDatatable from '../../Components/Datatable/FarmDatatable';

const FarmList = () => {
  return (
    <div className="list">
        <Sidebar/>
        <div className="listContainer">
            <Navbar/>
            <FarmDatatable/>
        </div>
    </div>
  )
}

export default FarmList;