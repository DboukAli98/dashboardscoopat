import {React, useState } from 'react';
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import { Audio } from "react-loader-spinner";
import { Circles } from "react-loader-spinner";
import axios from "axios";
import base_url from "../../Utils/Constants/Constants";
import Select from "react-select";
import Error from "../../Utils/UserPrompts/Error";
import Success from "../../Utils/UserPrompts/Success";
import { useParams } from 'react-router-dom';



const EditFarmer = () => {

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
    
      //post request states
      const [loading , setLoading] = useState(false);
      const [error , setError] = useState(false);
      const [success , setSuccess] = useState(false);
      const {farmerId} = useParams();

    const EditFarmer = async () => {
        setLoading(true);
        const url = base_url + `/api/Farmer/EditFarmer?farmerId=${farmerId}`;
        const response = await axios(url , {
          method:'POST',
          data : reqData,
        });
        if(response.status === 200){
          setLoading(false);
          setSuccess(true);
    
        }else if(response.status === 400){
          setLoading(true);
          setError(true);
        }
      };
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Edit Farmer</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <h2>Input Information</h2>
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label>Firstname</label>
                <input
                  type="text"
                  
                  placeholder="John"
                  onChange={(e) => setFname(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Lastname</label>
                <input
                  type="text"
                  
                  placeholder="Doe"
                  onChange={(e) => setLname(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Id Type</label>
                <input
                  type="text"
                  
                  placeholder="Id Type"
                  onChange={(e) => setIdType(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Id Number</label>
                <input
                  type="text"
                  
                  placeholder="Id number"
                  onChange={(e) => setIdNum(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>BirthPlace</label>
                <input
                  type="text"
                  
                  placeholder="Agboville"
                  onChange={(e) => setBPlace(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>BirthDate</label>
                <input
                  type="date"
                  
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
                  
                  placeholder="+972..."
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Location</label>
                <input
                  type="text"
                  
                  placeholder="Location"
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Section</label>
                <input
                  type="text"
                  
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
                <button onClick={EditFarmer}>Edit Farmer</button>
              </div>
              {loading && <Circles
                      height="30"
                      width="30"
                      radius="9"
                      color="white"
                      ariaLabel="loading"
                    />}
              {error === true ? (
                <Error text={"Failed To Update Farmer Please Try again Later !"}/>
              )                :null
            }
            {success === true ? (
                <Success text={"Farmer Successfully Edited !"}/>
              )                :null
            }
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditFarmer