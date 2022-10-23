import "./new.scss";
import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import Select from "react-select";
import { Audio } from "react-loader-spinner";
import axios from "axios";
import ErrorMessage from "../../Components/MessageHandlings/Error";
import SuccessMessage from "../../Components/MessageHandlings/Success";

const New = () => {
  const regionOptions = [
    { value: "SEGUIE", label: "SEGUIE" },
    { value: "KOUADJAKRO", label: "KOUADJAKRO" },
    { value: "OFFOUMPO", label: "OFFOUMPO" },
    { value: "BOKAO", label: "BOKAO" },
    { value: "SICOGI", label: "SICOGI" },
    { value: "OFFA", label: "OFFA" },
    { value: "ABOUDE MANDEKE", label: "ABOUDE MANDEKE" },
    { value: "KOTCHIMPO", label: "KOTCHIMPO" },
    { value: "ABOUDE NOUVEAU QUARTIER", label: "ABOUDE NOUVEAU QUARTIER" },
    { value: "ABOUDE KOUASSIKRO", label: "ABOUDE KOUASSIKRO" },
  ];
  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ];

  const IsOwnerOptions = [
    { value: true, label: "Yes" },
    { value: false, label: "No" },
  ];
  const [message, setMessage] = useState(null);
  const [loaded, setLoaded] = useState(true);
  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const [idType, setIdType] = useState();
  const [idNum, setIdNum] = useState();
  const [bPlace, setBPlace] = useState();
  const [bDate, setBDate] = useState();
  const [gender, setGender] = useState();
  const [phone, setPhone] = useState();
  const [location, setLocation] = useState();
  const [section, setSection] = useState();
  const [region, setRegion] = useState();
  const [department, setDepartment] = useState();
  const [owner, setOwner] = useState();

  const reqData = {
    firstName: fname,
    lastName: lname,
    idType: idType,
    idNumber: idNum,
    birthPlace: bPlace,
    birthDate: bDate,
    sex: gender,
    contact: phone,
    location: location,
    section: section,
    region: region,
    department: department,
    isFarmOwner: owner,
  };

  const AddFarmer = async (e) => {
    e.preventDefault();
    setLoaded(false);
    await axios("https://localhost:7066/api/Farmer/AddFarmer", {
      method: "POST",
      data: reqData,
      "content-Type": "application/json",
    }).then(response => {setMessage("Success");setLoaded(true)}).catch(error => {setMessage("Error") ; setLoaded(true) });
  
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New Farmer</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <h2>Input Information</h2>
          </div>
          <div className="right">
            <form>
              {loaded === false ? (
                <div className="loader">
                  <Audio
                    className="loader"
                    height="30"
                    width="30"
                    radius="9"
                    color="#26547c"
                    ariaLabel="loading"
                    wrapperStyle
                    wrapperClass
                  />
                  <p className="loading">Loading</p>
                </div>
              ) : null}
              <div className="formInput">
                <label>Firstname</label>
                <input
                  type="text"
                  required
                  placeholder="John"
                  onChange={(e) => setFname(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Lastname</label>
                <input
                  type="text"
                  required
                  placeholder="Doe"
                  onChange={(e) => setLname(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Id Type</label>
                <input
                  type="text"
                  required
                  placeholder="Id Type"
                  onChange={(e) => setIdType(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Id Number</label>
                <input
                  type="text"
                  required
                  placeholder="Id number"
                  onChange={(e) => setIdNum(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>BirthPlace</label>
                <input
                  type="text"
                  required
                  placeholder="Agboville"
                  onChange={(e) => setBPlace(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>BirthDate</label>
                <input
                  type="date"
                  required
                  onChange={(e) => setBDate(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Gender</label>
                <Select
                  options={genderOptions}
                  onChange={(value) => setGender(value.value)}
                />
              </div>
              <div className="formInput">
                <label>Contact Phone</label>
                <input
                  type="phone"
                  required
                  placeholder="+972..."
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Location</label>
                <input
                  type="text"
                  required
                  placeholder="Location"
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Section</label>
                <input
                  type="text"
                  required
                  placeholder="Section"
                  onChange={(e) => setSection(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Region</label>
                <Select
                  options={regionOptions}
                  onChange={(value) => setRegion(value.value)}
                />
              </div>
              <div className="formInput">
                <label>Department</label>
                <input
                  type="text"
                  required
                  placeholder="Department"
                  onChange={(e) => setDepartment(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Farm Owner ?</label>
                <Select
                  options={IsOwnerOptions}
                  onChange={(value) => setOwner(value.value)}
                />
              </div>
              <div className="formInput">
                <button onClick={AddFarmer}>Add Farmer</button>
              </div>
              {message ==="Error" && ErrorMessage("Something Went Wrong !")}
              {message === "Success" && SuccessMessage("Farmer Added !")}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
