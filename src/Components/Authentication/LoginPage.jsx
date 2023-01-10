import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
} from "mdb-react-ui-kit";
import base_url from "../../Utils/Constants/Constants";
import { Circles } from "react-loader-spinner";
import axios from "axios";
import Error from "../../Utils/UserPrompts/Error";
import { useNavigate, useNavigation } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { authActions } from "../../redux/slices/authSlice";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const [loading, setLoading] = useState(false);
  const [error , setError] = useState(false);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const data = {
    email: email,
    password: password,
  };
  
  const https = require('https');
const axios = require('axios');

const instance = axios.create({
  httpsAgent: new https.Agent({ rejectUnauthorized: false }),
});





  const LoginHandler = async () => {
    setLoading(true);
    try {
      const url = base_url + "/api/Authentication/loginAdmin";
      const response = await instance(url, {
        method: "POST",
        data: data,
      });
      if (response.status === 200) {
        setLoading(false);
        const data = response.data;
        const username = data.user;
      const role = data.role;
      const id = data.employeeId;
      dispatch(authActions.login(username));
      dispatch(authActions.setRole(role));
      dispatch(authActions.setUserId(id));

  
        navigate("/");
      } else {
        setLoading(false);
        setError(true);
        console.log("Error !");
      }
      
    } catch (error) {
      setError(true);
      setLoading(false);
      
    }

   
  };
  return (
    <MDBContainer className="loginContainer" fluid>
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol col="12">
          <MDBCard
            className="bg-dark text-white my-5 mx-auto"
            style={{ borderRadius: "1rem", maxWidth: "400px" }}
          >
            <MDBCardBody className="p-5 d-flex flex-column align-items-center mx-auto w-100">
              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-white-50 mb-5">
                Please enter your login and password!
              </p>

              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                onChange={(e) => setEmail(e.target.value)}
                labelClass="text-white"
                label="Email address"
                id="formControlLg"
                type="email"
                size="lg"
              />
              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                onChange={(e) => setPassword(e.target.value)}
                labelClass="text-white"
                label="Password"
                id="formControlLg"
                type="password"
                size="lg"
              />

              {/* <p className="small mb-3 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p> */}
              <MDBBtn
                outline
                className="mx-2 px-5"
                color="white"
                size="lg"
                onClick={LoginHandler}
              >
                Login
                {loading && (
                  <div className="loader">
                    <Circles
                      height="30"
                      width="30"
                      radius="9"
                      color="white"
                      ariaLabel="loading"
                    />
                    
                  </div>
                )}
              </MDBBtn>
              {error && <Error text={"Login Failed Invalid Credentials "}/>}

              
            </MDBCardBody>
          </MDBCard>
          
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default LoginPage;
