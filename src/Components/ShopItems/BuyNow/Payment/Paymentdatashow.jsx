import React, { useEffect, useState } from 'react'

const Paymentdatashow = () => {

  const [lastUserData, setLastUserData] = useState({});
  useEffect(() => {
    const storedUserArray = JSON.parse(localStorage.getItem("userArray"));
    // console.log('storedUserArray', storedUserArray)

    // if (Array.isArray(storedUserArray) && storedUserArray.length > 0) {
    //   const lastUser = storedUserArray[storedUserArray.length - 1];
    //   console.log('lastUser', lastUser);
    //   setLastUserData(lastUser);
    // } else {
    //   console.log('No user data found in localStorage or invalid data format');
    // }
    // const lastUser = storedUserArray[storedUserArray.length - 1];
    // console.log('lastUser', lastUser);
    setLastUserData(storedUserArray);
  }, []);
  return (
    <div className="payment-info-container">
      <ul>
        <div className=" flex justify-between">
        <h2
          className=" text-slate-700 font-medium f  text-font tracking-wide text-center p-3"
          style={{ fontSize: "28px" }}>
          Personal Info
        </h2>
      </div>
        <hr />
        {lastUserData && (
          <div className="flex ">
            <div style={{ padding: '10px 7px' }}>
              <div style={{ padding: "0px 10px", fontSize: "20px" }}>

                {lastUserData.fname} {lastUserData.lname}
              </div>
              <div style={{ padding: "0px 10px", fontSize: "20px" }}>

                {lastUserData.addLine1}
              </div>
              <div style={{ padding: "0px 10px", fontSize: "20px" }}>

                {lastUserData.addLine2}
              </div>
              <div style={{ padding: "0px 10px", fontSize: "20px" }}>
                {lastUserData.city}, {lastUserData.pincode}
                {lastUserData.country}
              </div>
            </div>
          </div>
        )}
      </ul>
    </div>
  );
}

export default Paymentdatashow
