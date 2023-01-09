import React from 'react';
import './list.scss';
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import InspectionsDatatable from '../../Components/Datatable/InspectionsDatatable';

const InspectionsList = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <InspectionsDatatable/>
      </div>
    </div>
  );
}

export default InspectionsList;