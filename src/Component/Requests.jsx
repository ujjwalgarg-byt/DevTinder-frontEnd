import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequests, removeRequests } from "../utils/requestsSlice";
const Requests = () => {
  const requests = useSelector((store) => store.requests);
  const dispatch = useDispatch();

  const reviewRequest = async(status,_id)=>{
    try{
      const res = await axios.post(BASE_URL+"/request/review/" + status+"/"+_id,{},{withCredentials:true});
      dispatch(removeRequests(_id));
    }catch(err){
      console.error(err);
      
    }
  };

  const getRequests = async () => {
    try{
    const res = await axios.get(BASE_URL + "/user/requests/received", {
      withCredentials: true,
    });
    dispatch(addRequests(res?.data?.data));
    }catch(err){
      console.error(err);
      
    }
  };
  useEffect(() => {
    getRequests();
  }, []);
  if (!requests) return;
  if (requests.length === 0) {
    return <h1 className="text-center text-2xl my-10">No requests Found!</h1>;
  }
  return (
    <div className="text-center my-10">
      <h1 className=" text-2xl font-bold ">Requests</h1>{" "}
      {requests.map((requests) => {
        const { firstName, lastName, about, photoUrl } = requests.fromUserId;
        return (
          <div className="flex justify-between items-center p-4 m-4 rounded-md bg-base-200 w-1/3 mx-auto">
            <div>
              <img className="size-10 rounded-full" src={photoUrl} />
            </div>
            <div className="mx-4 text-left">
              <h1 className="font-bold">{firstName + " " + lastName}</h1>
              <p className="text-xs font-semibold opacity-60">{about}</p>
            </div>
            <div>
              <button className="btn bg-primary mx-2 p-2" onClick={()=>reviewRequest("rejected",requests._id)}>
                Reject
              </button>

              <button className="btn  bg-secondary mx-2 p-2 " onClick={()=>reviewRequest("accepted",requests._id)}>
                Accept
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Requests;
