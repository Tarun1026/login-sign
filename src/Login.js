import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
const Login = () => {
  const [user, setUser] = useState({
    Username: "",
    Password: "",
  });

  const [errors, setErrors] = useState({});


  const handleInputData = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

const onLogin=()=>
  {
    if (user.Username==""|| user.Password==""){
      console.log('gf')
    }
  }


  const handleSubmit = (e) => {
    
    e.preventDefault();
    const validationErrors = {}
    if(!user.Username.trim()) {
        validationErrors.Username = "Username is required";
    }

    
    if(!user.Password.trim()) {
        validationErrors.Password = "Password is required";
    } 
 

    setErrors(validationErrors);

    if(Object.keys(validationErrors).length === 0) {
        alert("Form Submitted successfully")
    }
  
  };
 
  return (
    <>
    <form onSubmit={handleSubmit}>
      <div className="BG">
        <div className="LoginBG">
          <div className="Login">Login</div>
          <div className="Username">Username</div>
          <div className="input-box">
            <label htmlFor="Username"></label>
            <input
              className="inp"
              type="text"
              name="Username"
              id="Username"
              value={user.Username}
              onChange={handleInputData}
              placeholder="Enter your username"
              // required
            ></input>
             
            <FaUser className="icon" />
            {errors.Username && <span className="error-message">{errors.Username}</span>}  
          </div>
          <div className="Password">Password</div>
          <div className="input-box">
            <label htmlFor="Password"></label>
            <input
              className="inp2"
              type="Password"
              name="Password"
              id="Password"
              value={user.Password}
              onChange={handleInputData}
              placeholder="Enter your Password"
              // required
            ></input>
            {errors.Password && <span className="error-message">{errors.Password}</span>}  
            <FaLock className="icon" />
          </div>

          <div className="Submit">
            <button type="submit" onClick={onLogin} > 
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
      </form>
    </>
  );
};

export default Login;
