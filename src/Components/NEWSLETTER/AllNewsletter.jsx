import { Button } from '@material-tailwind/react';
import React from 'react'

function AllNewsletter() {
  return (
 
      <div className="text-center">
      <hr />
        <div
          className="  text-5xl font-mono  mt-10 tracking-widest header-color"
          style={{ fontSize: "35px" }}
        >
          <h2>NEWSLETTER</h2>
        </div>
        <p className=" my-8 text-gray-700" style={{ fontSize: "15px" }}>
          Sign up to our newsletter to receive exclusive offers.
        </p>
        <div>
          <span>
            <input
              type="text"
              placeholder="E-mail"
              className="border-solid border border-gray-300 border-inherit px-8 py-1 email-input"
              required
            />
          </span>
          <span>
            <Button
              className="rounded-none newsletter-btn bg-black  text-center text-white  hover:bg-transparent  hover:border-solid border-2 border-black hover:text-black  "
              style={{ padding: "6px  35px" }}
            >
              SUBSCRIBE
            </Button>
             
          </span>
        </div>
      
      <hr className=" mt-10" />
      </div >
   
  );
}

export default AllNewsletter
