import "./new.scss";
import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";

const NewFarm = () => {
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New Farm</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <h2>Information</h2>
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label>Farm Code</label>
                <input type="text" required placeholder="009FO09..." />
              </div>
              <div className="formInput">
                <label>Total Area</label>
                <input type="number" required placeholder="12.2" />
              </div>
              <div className="formInput">
                <label>Lattitude</label>
                <input type="text" required placeholder="Latt..." />
              </div>
              <div className="formInput">
                <label>Longtitude</label>
                <input type="text" required placeholder="Long..." />
              </div>
              <div className="formInput">
                <button type="submit">Add Farm</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewFarm;
