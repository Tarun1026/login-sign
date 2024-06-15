import React, { useState } from "react";
import "./Login.css";

import { Link } from "react-router-dom";
import { FaUser,FaLock } from "react-icons/fa";
const Login=()=> {
    const [user, setUser] = useState({
        Username: "",
        Password: "",
      });
      const handleInputData = (e) => {
        const { name, value } = e.target; 
        setUser({ ...user, [name]: value });
    };
  return (
    <>
      <div className="BG">
        <div className="LoginBG">
          <div className="Login">Login</div>
          <div className="Username">Username</div>
          <div className="input-box">
            <label htmlFor='Username'>
                
            </label>
            <input
              className="inp"
              type="text"
              name="Username"
              id="Username"
              value={user.Username}
              onChange={handleInputData}
              placeholder="Enter your username"
              required
            ></input>
            <FaUser className="icon"/>

          </div>
          <div className="Password">Password</div>
          <div className="input-box">
          <label htmlFor='Password'>
                
                </label>
            <input
              className="inp2"
              type="Password"
              name="Password"
              id="Password"
              value={user.Password}
              onChange={handleInputData}
              placeholder="Enter your Password"
              required
            ></input>
            <FaLock className="icon"/>
          </div>
          
          <div className="Submit">
            <button type="button">
                LOGIN
            </button>
          </div>
          <div className="SignUpLink">
            New User?
            <Link to="/Signup" className="SignUpLinkColour">
              {" "}
              SignUp
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
