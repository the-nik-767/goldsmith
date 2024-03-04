import React from 'react'
import { IoLogoInstagram } from "react-icons/io";
import { FaYoutube } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

const FooterIcons = () => {
  return (
    <div className="flex justify-between sm:justify-between md:justify-start lg:justify-start  mt-10">
      <span className="mr-12 text-3xl text-hover  text-gray-500">
        <FaFacebookF />
      </span>
      <span className="mr-12 text-3xl text-hover text-gray-500">
        <IoLogoInstagram />
      </span>
      <span className="mr-12 text-3xl text-hover text-gray-500">
        <FaYoutube />
      </span>
    </div>
  );
}

export default FooterIcons
