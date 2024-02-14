import React, { useEffect, useState } from 'react'

const Paymentdatashow = () => {

  const [lastUserData, setLastUserData] = useState(null);

  useEffect(() => {
    const storedUserArray = JSON.parse(localStorage.getItem("userArray")) || [];
    const lastUser = storedUserArray[storedUserArray.length - 1];
    setLastUserData(lastUser);
  }, []);
  return (
    <div>
      <div
        className="payment-info-container"
        style={{ margin: "10px 0px 5px 15px" }}
      >
        <ul>
          {/* {userArray.map((user, index) => (
          <li key={index}>
            <div>First Name: {user.fname}</div>
            <div>Last Name: {user.lname}</div>
            <div>Address Line 1: {user.addLine1}</div>
            <div>Address Line 2: {user.addLine2}</div>
            <div>Pincode: {user.pincode}</div>
            <div>City: {user.city}</div>
            <div>Email: {user.email}</div>
            <div>Country: {user.country}</div>
            <div>State: {user.state}</div>
            <div>Phone: {user.phone}</div>
            <hr />
          </li>
        ))} */}
          <div className=" flex justify-between">
            <h2
              className=" text-slate-700 font-medium f  text-font tracking-wide text-center p-3"
              style={{ fontSize: "28px" }}
            >
              Personal Info
            </h2>
          </div>
          <hr  />
          {lastUserData && (
            <div className="flex ">
              <div style={{padding:'10px 7px'}}>
                <div style={{ padding: "0px 10px", fontSize: "20px" }}>
                  {" "}
                  {lastUserData.fname} {lastUserData.lname}
                </div>
                <div style={{ padding: "0px 10px", fontSize: "20px" }}>
                  {" "}
                  {lastUserData.addLine1}
                </div>
                <div style={{ padding: "0px 10px", fontSize: "20px" }}>
                  {" "}
                  {lastUserData.addLine2}
                </div>
                <div style={{ padding: "0px 10px", fontSize: "20px" }}>
                  {lastUserData.city}, {lastUserData.pincode}{" "}
                  {lastUserData.country}
                </div>
              </div>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Paymentdatashow
