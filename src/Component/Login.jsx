import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLoginForm, setIsLoginForm] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSignUp=async()=>{
    setError("");
    try{
      const res  = await axios.post(BASE_URL + "/signup",{
        emailId,firstName,lastName,password
      },{withCredentials:true});
      console.log(res?.data?.data);
      
      dispatch(addUser(res?.data?.data));
      navigate("/profile")
    }catch(err){
      console.error(err);
      setError(err?.response?.data || "Something went wrong");
      
    }
  }

  const handleLogin = async () => {
    setError("");
    try {
      const res = await axios.post(
        BASE_URL + "/logIn",
        {
          emailId,
          password,
        },
        { withCredentials: true },
      );
      console.log(res.data);
      dispatch(addUser(res.data));
      return navigate("/");
    } catch (err) {
      setError(err?.response?.data || "Something went wrong");
      // console.error(err);
    }
  };

  return (
    <div className="my-4  flex items-center justify-center">
      <div className="card w-96 shadow-sm">
        <fieldset className="fieldset bg-base-200  rounded-box  p-6">
          <legend className="fieldset-legend text-lg font-semibold">
            {isLoginForm ? "Login" : "Sign Up"}
          </legend>

          { !isLoginForm && <><label className="label">First Name</label>
          <input
            type="text"
            value={firstName}
            className="input input-bordered"
            placeholder="Enter First Name"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <label className="label">Last Name</label>
          <input
            type="text"
            value={lastName}
            className="input input-bordered"
            placeholder="Enter Last Name"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          /> 
          
          </>}

          <label className="label mt-2">Email</label>
          <input
            type="email"
            value={emailId}
            className="input input-bordered"
            placeholder="Email"
            onChange={(e) => {
              setEmailId(e.target.value);
            }}
          />

          <label className="label mt-2">Password</label>
          <input
            type="password"
            value={password}
            className="input input-bordered"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <p className="text-red-500">{error}</p>
          <button className="btn btn-neutral mt-6 w-full" onClick={isLoginForm?handleLogin:handleSignUp}>
            {isLoginForm ? "Login" : "Sign Up"}
          </button>
          <p
            className="m-auto py-2 cursor-pointer"
            onClick={() => {
              setIsLoginForm((value) => !value);
            }}
          >
            {isLoginForm
              ? "New User? Sign Up Here!"
              : "Existing User? Login Here"}
          </p>
        </fieldset>
      </div>
    </div>
  );
};

export default Login;
