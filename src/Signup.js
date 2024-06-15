import React, { useState } from 'react'
import './SignUp.css'
import { Link } from 'react-router-dom'
import { FaUser,FaLock,FaPhoneSquareAlt} from "react-icons/fa";
import { MdEmail  } from "react-icons/md";
import { RiLockPasswordFill,RiLockPasswordLine } from "react-icons/ri";
function SignUp() {
    const[user,setUser]=useState({
        Fullname:"",
        Email:"",
        Phone_Number:"",
        Create_Password:"",
        Confirm_Password:"",

    });
const handleInputDataS=(e)=>{
    console.log(e)
    const { name, value } = e.target; 
        setUser({ ...user, [name]: value });
};
    
  return (
    <>
      <div className="BGS">
        <div className="SignUpBG">
          <div className="SignUp">Sign Up</div>
          
          <div className='input-box-S'>
          <label htmlFor='Fullname'>
                
                </label>
            <input
              className="inpS"
              type="text"
              name="Fullname"
              id='Fullname'
              value={user.Fullname}
              onChange={handleInputDataS}
              placeholder="FullName"
              required
            ></input>
             <FaUser className="icons"/>
          </div>
          
          <div className='input-box-S'>
          <label htmlFor='Email'>
                
                </label>
            <input
              className="inpS"
              type="Email"
               name="Email"
              id='Email'
              value={user.Email}
              onChange={handleInputDataS}
              placeholder="E-mail"
              required
            ></input>
            <MdEmail  className="icons"/>
          </div>

          <div className='input-box-S'>
          <label htmlFor='Phone_Number'>
                
                </label>
            <input
              className="inpS"
              type="Number"
               name="Phone_Number"
              id='Phone_Number'
              value={user.Phone_Number}
              onChange={handleInputDataS}
              placeholder="Phone Number"
              required
            ></input>
            <FaPhoneSquareAlt className="icons"/>
          </div>
          
          <div className='input-box-S'>
          <label htmlFor='Create_Password'>
                
                </label>
            <input
              className="inpS"
              type="Password"
               name="Create_Password"
              id='Create_Password'
              value={user.Create_Password}
              onChange={handleInputDataS}
              placeholder="Create Password"
              required
            ></input>
            <RiLockPasswordFill className='icons'/>
          </div>

          <div className='input-box-S'>
          <label htmlFor='Confirm_Password'>
                
                </label>
            <input
              className="inpS"
              type="Password"
               name="Confirm_Password"
              id='Confirm_Password'
              value={user.Confirm_Password}
              onChange={handleInputDataS}
              placeholder="Confirm Password"
              required
            ></input>
            <RiLockPasswordLine className="icons"/>
          </div>

          

          <div className="SubmitSignUp">
            <button>
                SignUp
            </button>
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
    </>
  )
}

export default SignUp