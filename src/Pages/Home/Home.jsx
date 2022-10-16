import React from "react";
import "./home.scss";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import Widget from "../../Components/Widget/Widget";
import Featured from "../../Components/Featured/Featured";
import Charts from "../../Components/Charts/Charts";
import Tables from "../../Components/Tables/Tables";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="farmer"/>
          <Widget type="inspection" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Charts />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Farmers</div>
          <Tables />
        </div>
      </div>
    </div>
  );
};

export default Home;
