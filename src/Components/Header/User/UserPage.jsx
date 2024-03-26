import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ApiClient from '../../../method/ApiClient'
import { useDispatch, useSelector } from 'react-redux'
import { getUserData } from '../../../Redux/Action/productAction'
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa6";


function UserPage() {
  // const [getData, setGetData] = useState()
  const [error, setError] = useState(null);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userID = JSON.parse(localStorage.getItem("UserLoginData"));
  const uId = userID.userId
  const getData = useSelector((state) => state.product.userData)
  useEffect(() => {
    dispatch(getUserData(uId))

  }, [uId])


  return (
    <div className='mt-28'>
      <div className='flex m-5 text-2xl cursor-pointer' onClick={() => navigate("/")}>
        <p><FaArrowLeft /></p> <p className='ms-2'>Home</p>
      </div>
      <Box className='m-5 shadow-xl p-5'>
        <strong className='text-xl'>My order</strong>
        {error ? (
          <p>{error}</p>
        ) : (
          <div >
            {getData.map((item, index) => (
              <div key={index} className=' border p-5 m-2 bg-gray-100'>
                <p className='text-xl my-3'><strong>Order ID </strong>{item.pmdata[0].razorpay_order_id}</p>
                <div className='flex'>
                  {item.metadata.map((metadataItem, metadataIndex) => (
                    <div key={metadataIndex} className='p-2'>
                      <div><img src={metadataItem.prdimg.url} alt="Product Image" className='w-28 h-28' /></div>
                    </div>
                  ))}
                </div>
                <div className='ms-2'>
                  <p className='text-lg' ><strong>Name</strong> {item.fname} {item.lname}</p>
                  <p className='text-lg'><strong>Email</strong> {item.email}</p>
                  <p className='text-lg'><strong>Address</strong>  {item.addLine1}, {item.country}</p>
                  <p className='text-lg'><strong>Phone no</strong> +{item.phone}</p>
                </div>
                <div className='flex'>
                  <button className='border border-black m-2 p-2 font-bold'>Track Order </button><br />
                  <button className='border border-black m-2 p-2 font-bold' onClick={() => navigate(`/userOrderDetalis/${item.pmdata[0].razorpay_order_id}`)}>Order Detalis </button>
                </div>
              </div>
            ))}
          </div>
        )
        }
      </Box >
    </div >
  )
}

export default UserPage
