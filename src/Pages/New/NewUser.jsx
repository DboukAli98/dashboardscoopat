import "./new.scss";
import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import axios from "axios";
import base_url from "../../Utils/Constants/Constants";
// import Select from "react-select";


const NewUser = () => {

  const [email , setEmail] = useState();
  const [fname , setFname] = useState();
  const [lname , setLname] = useState();
  const [idtype , setIdType] = useState();
  const [idnum , setIdNum] = useState();
  const [phone , setPhone] = useState();
  

  const data = {
    email: email,
    firstname: fname,
    lastname : lname,
    idType:idtype,
    idNumber:idnum,
    contact:phone
  };

  const AddUser = async (e) => {
    e.preventDefault();
    const request = await axios(base_url + '/api/Authentication/RegisterEmployee' , {
      method:'POST',
      data : data,
      "Content-Type" : "application/json"
      
    });

    if(request.status === 200){
      console.log("Success");
    }
    else {
      console.log("Error");
    }

  };



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
          <form onSubmit={AddUser}>
            <div className="formInput">
              <label>Firstname</label>
              <input type="text" required placeholder="John" onChange={(e) => setFname(e.target.value)} />
            </div>
            <div className="formInput">
              <label>Lastname</label>
              <input type="text" required placeholder="Doe" onChange={(e) => setLname(e.target.value)} />
            </div>
            <div className="formInput">
              <label>Email</label>
              <input type="text" required placeholder="John" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="formInput">
              <label>Id Type</label>
              <input type="text" required placeholder="Id Type" onChange={(e) => setIdType(e.target.value)} />
            </div>
            <div className="formInput">
              <label>Id Number</label>
              <input type="text" required placeholder="Id number" onChange={(e) => setIdNum(e.target.value)} />
            </div>
            {/* <div className="formInput">
              <label>Gender</label>
              <Select options={genderOptions} />
            </div> */}
            <div className="formInput">
              <label>Contact Phone</label>
              <input type="phone" required placeholder="+972..." onChange={(e) => setPhone(e.target.value)}  />
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