import React, { useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
const EditProfile = ({ user }) => {
  const [firstName, setFirstname] = useState(user.firstName);
  const [lastName, setLastname] = useState(user.lastName);
  const [age, setAge] = useState(user.age || "");
  const [gender, setGender] = useState(user.gender || "");
  const [photoUrl, setPhotourl] = useState(user.photoUrl);
  const [about, setAbout] = useState(user.about);
  const [error, setError] = useState("");
  const [showToast, setShowtoast] = useState(false);
  const dispatch = useDispatch();

  const saveprofile = async () => {
    setError("");
    try {
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        { firstName, lastName, age, about, gender, photoUrl },
        { withCredentials: true },
      );
      dispatch(addUser(res?.data?.data));
      setShowtoast(true);
      setTimeout(() => {
        setShowtoast(false);
      }, 3000);
    } catch (err) {
      setError(err?.response?.data || "Something went wrong");
    }
  };

  return (
    <>
      <div className="flex justify-center  my-16">
        <div className="flex items-center justify-center  mx-10">
          <div className="card w-96 shadow-sm">
            <fieldset className="fieldset bg-base-200  rounded-box  p-6">
              <div className="text-lg text-center ">Edit Profile</div>

              <label className="label">First Name</label>
              <input
                type="text"
                value={firstName}
                className="input input-bordered p-3"
                placeholder="Enter First Name"
                onChange={(e) => {
                  setFirstname(e.target.value);
                }}
              />

              <label className="label mt-2">Last Name</label>
              <input
                type="text"
                value={lastName}
                className="input input-bordered p-3"
                placeholder="Enter Last Name"
                onChange={(e) => {
                  setLastname(e.target.value);
                }}
              />

              <label className="label mt-2">Age</label>
              <input
                type="text"
                value={age}
                className="input input-bordered p-3"
                placeholder="Enter Age"
                onChange={(e) => {
                  setAge(e.target.value);
                }}
              />
              <label className="label mt-2">Gender</label>
              <select
                value={gender}
                className="select select-bordered p-3"
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Select Gender</option>
                <option value="male">male</option>
                <option value="female">female</option>
                <option value="others">others</option>
              </select>
              <label className="label mt-2">Photo Url</label>
              <input
                type="text"
                value={photoUrl}
                className="input input-bordered p-3"
                placeholder="Enter Photo Url"
                onChange={(e) => {
                  setPhotourl(e.target.value);
                }}
              />
              <label className="label mt-2">About</label>
              <textarea
                value={about}
                className="textarea h-24 p-2"
                placeholder="Bio"
                onChange={(e) => {
                  setAbout(e.target.value);
                }}
              ></textarea>
              <p className="text-red-500">{error}</p>
              <button
                className="btn btn-neutral mt-6 w-full"
                onClick={saveprofile}
              >
                Save Profile
              </button>
            </fieldset>
          </div>
        </div>
        <UserCard
          user={{ firstName, lastName, age, about, gender, photoUrl }} showButtons={false}
        />
      </div>
      {showToast && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success">
            <span>Profile saved successfully👍</span>
          </div>
        </div>
      )}
    </>
  );
};

export default EditProfile;
