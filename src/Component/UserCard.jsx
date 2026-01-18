import React from "react";

const UserCard = ({user}) => {
    console.log(user);
    
    const {firstName,lastName,photoUrl,about,age,gender} = user;
  return (
    
      <div className="card bg-base-300 w-96  shadow-sm">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {firstName+" "+lastName}
          </h2>
          {age&&gender&&<p>{age + ", " + gender}</p>}
          <p>
            {about}
          </p>
          <div className="card-actions flex justify-center my-4">
            <div className="btn btn-primary">Ignored</div>
            <div className="btn btn-secondary">Interested</div>
          </div>
        </div>
      </div>
    
  );
};

export default UserCard;
