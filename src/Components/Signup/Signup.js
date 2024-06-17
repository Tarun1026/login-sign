import React, { useState } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';
import { FaUser, FaLock, FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill, RiLockPasswordLine } from "react-icons/ri";

function SignUp() {
  const [user, setUser] = useState({
    Fullname: "",
    Email: "",
    Phone_Number: "",
    Create_Password: "",
    Confirm_Password: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputDataS = (e) => {
    console.log(e);
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!user.Fullname.trim()) {
      validationErrors.Fullname = "Name is required";
    }

    if (!user.Email.trim()) {
      validationErrors.Email = "Email is required";
    }

    if (!user.Phone_Number.trim()) {
      validationErrors.Phone_Number = "Phone Number is required";
    }

    if (!user.Create_Password.trim()) {
      validationErrors.Create_Password = "Password is required";
    }

    if (!user.Confirm_Password.trim()) {
      validationErrors.Confirm_Password = "Password is required";
    }

    if(user.Create_Password!=user.Confirm_Password){
      validationErrors.Confirm_Password="Password not matched"
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form Submitted successfully");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="BGS">
          <div className="SignUpBG">
            <div className="SignUp">Sign Up</div>

            <div className="input-box-S">
              <label htmlFor="Fullname"></label>
              <input
                className="inpS"
                type="text"
                name="Fullname"
                id="Fullname"
                value={user.Fullname}
                onChange={handleInputDataS}
                placeholder="FullName"
              />
              {errors.Fullname && (
                <span className="error-message-2">{errors.Fullname}</span>
              )}
              <FaUser className="icons" />
            </div>

            <div className="input-box-S">
              <label htmlFor="Email"></label>
              <input
                className="inpS"
                type="email"
                name="Email"
                id="Email"
                value={user.Email}
                onChange={handleInputDataS}
                placeholder="E-mail"
              />
              {errors.Email && (
                <span className="error-message-2">{errors.Email}</span>
              )}
              <MdEmail className="icons" />
            </div>

            <div className="input-box-S">
              <label htmlFor="Phone_Number"></label>
              <input
                className="inpS"
                type="number"
                name="Phone_Number"
                id="Phone_Number"
                value={user.Phone_Number}
                onChange={handleInputDataS}
                placeholder="Phone Number"
              />
              {errors.Phone_Number && (
                <span className="error-message-2">{errors.Phone_Number}</span>
              )}
              <FaPhoneSquareAlt className="icons" />
            </div>

            <div className="input-box-S">
              <label htmlFor="Create_Password"></label>
              <input
                className="inpS"
                type="password"
                name="Create_Password"
                id="Create_Password"
                value={user.Create_Password}
                onChange={handleInputDataS}
                placeholder="Create Password"
              />
              {errors.Create_Password && (
                <span className="error-message-2">{errors.Create_Password}</span>
              )}
              <RiLockPasswordFill className="icons" />
            </div>

            <div className="input-box-S">
              <label htmlFor="Confirm_Password"></label>
              <input
                className="inpS"
                type="password"
                name="Confirm_Password"
                id="Confirm_Password"
                value={user.Confirm_Password}
                onChange={handleInputDataS}
                placeholder="Confirm Password"
              />
              {errors.Confirm_Password && (
                <span className="error-message-2">{errors.Confirm_Password}</span>
              )}
              <RiLockPasswordLine className="icons" />
            </div>

            <div className="SubmitSignUp">
              <button type="submit">SignUp</button>
            </div>
            <div className="LoginLink">
              Already have an account?
              <Link to="/" className="LoginLinkColour">
                {" "}
                Login
              </Link>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default SignUp;
