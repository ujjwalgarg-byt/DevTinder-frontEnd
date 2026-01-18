import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {addUser} from "../utils/userSlice"
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
const Login = () => {
  const [emailId,setEmailId]=useState("ujjwalgarg@gmail.com");
  const [password,setPassword]=useState("Ujjwal@120");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error,setError] = useState("");
  const handleLogin=async()=>{
    try{    
    const res = await axios.post( BASE_URL+"/logIn",{
          emailId,password
    },{withCredentials:true});
    console.log(res.data);
    dispatch(addUser(res.data))
    return navigate("/");
    }catch(err){
      setError(err?.response?.data|| "Something went wrong");
      console.error(err);
      
    }
  };

  return (
    <div className="my-4  flex items-center justify-center">
      <div className="card w-96 shadow-sm">
        <fieldset className="fieldset bg-base-200  rounded-box  p-6">
          <legend className="fieldset-legend text-lg font-semibold">
            Login
          </legend>

          <label className="label">Email</label>
          <input
            type="email"
            value={emailId}
            className="input input-bordered"
            placeholder="Email"
            onChange={(e)=>{ setEmailId(e.target.value)}}
          />

          <label className="label mt-2">Password</label>
          <input
            type="password"
            value={password}
            className="input input-bordered"
            placeholder="Password"
            onChange={(e)=>{ setPassword(e.target.value)}}
          />
          <p className="text-red-500">{error}</p>
          <button className="btn btn-neutral mt-6 w-full" onClick={handleLogin}>Login</button>
        </fieldset>
      </div>
    </div>
  );
};

export default Login;
