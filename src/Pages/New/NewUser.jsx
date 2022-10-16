import "./new.scss";
import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
// import Select from "react-select";


const NewUser = () => {
  return (

    <div className="new">
    <Sidebar />
    <div className="newContainer">
      <Navbar />
      <div className="top">
        <h1>Add New User</h1>
      </div>
      <div className="bottom">
        <div className="left">
          <h2>Information</h2>
        </div>
        <div className="right">
          <form>
            <div className="formInput">
              <label>Firstname</label>
              <input type="text" required placeholder="John" />
            </div>
            <div className="formInput">
              <label>Lastname</label>
              <input type="text" required placeholder="Doe" />
            </div>
            <div className="formInput">
              <label>Id Type</label>
              <input type="text" required placeholder="Id Type" />
            </div>
            <div className="formInput">
              <label>Id Number</label>
              <input type="text" required placeholder="Id number" />
            </div>
            {/* <div className="formInput">
              <label>Gender</label>
              <Select options={genderOptions} />
            </div> */}
            <div className="formInput">
              <label>Contact Phone</label>
              <input type="phone" required placeholder="+972..." />
            </div>
            <div className="formInput">
              <label>Location</label>
              <input type="text" required placeholder="Location" />
            </div>
            {/* <div className="formInput">
              <label>Farm Owner ?</label>
              <Select options={IsOwnerOptions} />
            </div> */}
            <div className="formInput">
              <button type="submit">Add User</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
    
  );
}

export default NewUser;