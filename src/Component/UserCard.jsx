import axios from "axios";
import React from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeUser } from "../utils/feedSlice";

const UserCard = ({ user, showButtons = false }) => {
  // console.log(user);
  const dispatch = useDispatch();
  const { firstName, lastName, photoUrl, about, age, gender, _id } = user;

  const handleSendRequest = async (status, _id) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/send/" + status + "/" + _id,
        {},
        { withCredentials: true },
      );
      dispatch(removeUser(_id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="card bg-base-300 w-96  shadow-sm">
      <figure className="h-80 w-full overflow-hidden rounded-t-2xl">
        <img
          src={photoUrl}
          alt={firstName}
          className="h-full w-full object-cover object-top"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        {age && gender && <p>{age + ", " + gender}</p>}
        <p>{about}</p>
        {showButtons && (
          <div className="card-actions flex justify-center my-4">
            <div
              className="btn btn-primary"
              onClick={() => handleSendRequest("ignored", _id)}
            >
              Ignored
            </div>
            <div
              className="btn btn-secondary"
              onClick={() => handleSendRequest("interested", _id)}
            >
              Interested
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserCard;
