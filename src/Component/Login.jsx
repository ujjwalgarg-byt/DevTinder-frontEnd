import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const [emailId,setEmailId]=useState("");
  const [password,setPassword]=useState("");

  const handleLogin=()=>{
    const res = axios.post("http://localhost:3000/logIn",{
          emailId,password
    },{withCredentials:true});
  }

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

          <button className="btn btn-neutral mt-6 w-full" onClick={handleLogin}>Login</button>
        </fieldset>
      </div>
    </div>
  );
};

export default Login;
