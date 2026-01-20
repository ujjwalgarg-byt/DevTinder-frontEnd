import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { addConnections } from "../utils/connectionSlice";
import { useDispatch, useSelector } from "react-redux";


const Connection = () => {
  const dispatch = useDispatch();
  const connections = useSelector((store) => store.connections);

  const getConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });

      console.log("API data:", res.data);
      dispatch(addConnections(res.data));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getConnections();
  }, []);

  if (!connections) return;
  if (connections.length === 0) {
    return (
      <h1 className="text-center text-2xl my-10">No Connections Found!</h1>
    );
  }

  return (
    <div className="text-center my-10">
      <h1 className=" text-2xl ">Connections</h1>{" "}
      {connections.map((connection) => {
         const {firstName,lastName,about,photoUrl} = connection;
        return (
           <div className="flex p-4 m-4 rounded-md bg-base-200 w-1/3 mx-auto">
          <div>
            <img
              className="size-10 rounded-full"
              src={photoUrl}
            />
          </div>
          <div className="mx-4 text-left">
            <h1 className="font-bold">{firstName+" "+lastName}</h1>
            <p className="text-xs uppercase font-semibold opacity-60">
              {about}
            </p>
          </div>
        </div>
        )
      })}
    </div>
  );
};

export default Connection;
