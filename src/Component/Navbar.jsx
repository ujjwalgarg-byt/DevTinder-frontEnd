import React from "react";
import ToggleTheme from "./ToggleTheme";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { removeUser } from "../utils/userSlice";
import { removeFeed } from "../utils/feedSlice";
const Navbar = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // console.log(user);
  const handleLogout=async()=>{
    try{
      await axios.post(BASE_URL+"/logOut",{},{
        withCredentials:true
      });
        dispatch(removeUser());
        dispatch(removeFeed());
        navigate("/login");
    }catch(err){
      console.error(err);
      
    }
  }

  return (
    <div className="navbar bg-base-300 shadow-sm">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">👨‍💻DevTinder</Link>
      </div>
      
      
        <div className="flex gap-2">
          <ToggleTheme />
          {user && <>
          <span className="text-sm font-medium my-2.5">Welcome, {user.firstName}</span>
          <div className="dropdown dropdown-end mx-4">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="user photo"
                  src={user.photoUrl}
                />
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                  
                </Link>
              </li>
              <li>
                <Link to = "/connections">Connections</Link>
              </li>
              <li>
                <Link to="/requests">Requests</Link>
              </li>
              <li>
                <a onClick={handleLogout}>Logout</a>
              </li>
            </ul>
          </div>
          </>}
        </div>
      
    </div>
  );
};

export default Navbar;
