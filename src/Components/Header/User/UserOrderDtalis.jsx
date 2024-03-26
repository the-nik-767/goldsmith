import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import { FaArrowLeft } from "react-icons/fa6";


export default function UserOrderDtalis() {
    const navigate = useNavigate()
    const { orderId } = useParams();
    const getData = useSelector((state) => state.product.userData)
    const order = getData.find((item) => item.pmdata[0].razorpay_order_id === orderId);

    

    const metadata = order.metadata[0];
    const pm = order.pmdata[0];

    // {item.metadata.map((metadataItem, metadataIndex) => (
    //     <div key={metadataIndex} className='p-2'>
    //     <div><img src={metadataItem.prdimg.url} alt="Product Image" className='w-28 h-28' /></div>
    //   </div>
    // ))}

    const formatPhoneNumber = (phoneNumber, countryCode) => {
        const parsedNumber = parsePhoneNumberFromString(phoneNumber, countryCode);
        if (parsedNumber) {
            return parsedNumber.formatNational();
        } else {
            return phoneNumber;
        }
    };
    return (

        <div className='mt-28 mx-5 p-2'>
            <div className='flex m-5 text-2xl cursor-pointer' onClick={() => navigate("/user")}>
                <p><FaArrowLeft /></p> <p className='ms-2'>Order Detalis</p>
            </div>
            {order ? (
                <div>
                    <div className='bg-gray-100 p-2'>
                        <div className='flex justify-between'>
                            <div>
                                <p className='uppercase text-sm' >Order ID</p>
                                <p className='text-xl'>{order.pmdata[0].razorpay_order_id}</p>
                            </div>
                            <div>
                                <p className='uppercase'>Total</p>
                                <p className='text-xl'>€ {order.metadata.reduce((acc, cur) => acc + cur.prdprice * cur.quantity, 0)} /-</p>
                            </div>
                        </div>
                        <br />
                        <p className='uppercase text-sm'>Placed</p>
                        <p className='text-xl'>24 March</p>
                    </div>
                    <div className='bg-gray-100  mt-3 p-2 '>
                        <p className='text-xl tracking-widest leading-loose'>Shipping Address</p>
                        <p className='tracking-wide text-lg'>{order.fname} {order.lname}</p>
                        <p className='tracking-wide text-lg'>{order.addLine1} {order.addLine2}</p>
                        <p className='tracking-wide text-lg'>{order.city},  {order.country},{order.pincode}</p>
                        <p className='tracking-wide text-base'>+  {formatPhoneNumber(order.phone, order.country)}</p>
                    </div>
                    <div className='bg-gray-100  mt-3 p-2'>
                        <p className='text-xl tracking-widest leading-loose'>Your Order</p>
                        <div className='flex'>
                        {order.metadata.map((metadataItem, index) => (
                            <div key={index} className='flex'>
                                <img src={metadataItem.prdimg.url} alt={`Product ${index}`} className='w-24 h-24 border p-2' />
                                <div>
                                    <p className='tracking-wide text-lg'>{metadataItem.prdname}</p>
                                    <p className='tracking-wide text-lg'>Qty: {metadataItem.quantity}</p>
                                    <p className='tracking-wide text-lg'>€ {metadataItem.prdprice} /-</p>
                                    <p>Status: {metadataItem.status}</p>
                                </div>
                            </div>
                        ))}
                        </div>

                    </div>
                </div>
            ) : (
                <p>No order found with ID: {orderId}</p>
            )}
        </div>
    )
}
