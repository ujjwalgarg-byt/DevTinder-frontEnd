import React, { useState } from "react";
import UserCard from "./UserCard"
const EditProfile = ({ user }) => {
  const [firstName, setFirstname] = useState(user.firstName);
  const [lastName, setLastname] = useState(user.lastname);
  const [age, setAge] = useState(user.age);
  const [gender, setGender] = useState(user.gender);
  const [photoUrl, setPhotourl] = useState(user.photoUrl);
  const [about, setAbout] = useState(user.about);
  return (
    <div className="flex justify-center my-10">
      <div className="flex items-center justify-center  mx-10">
        <div className="card w-96 shadow-sm">
          <fieldset className="fieldset bg-base-200  rounded-box  p-6">
            <legend className="fieldset-legend text-lg font-semibold">
              Edit Profile
            </legend>

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
            <input
              type="text"
              value={gender}
              className="input input-bordered p-3"
              placeholder="Enter Gender"
              onChange={(e) => {
                setGender(e.target.value);
              }}
            />
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
            <input
              type="text"
              value={about}
              className="input input-bordered p-3"
              placeholder="Enter About"
              onChange={(e) => {
                setAbout(e.target.value);
              }}
            />

            <button className="btn btn-neutral mt-6 w-full">
              Save Profile
            </button>
          </fieldset>
        </div>
      </div>
      <UserCard user = {{firstName,lastName,age,about,gender,photoUrl}}/>
    </div>
  );
};

export default EditProfile;
