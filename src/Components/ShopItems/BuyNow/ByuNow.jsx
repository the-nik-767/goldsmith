import React, { useEffect, useState } from 'react'
import './style/buyNow.css'
import { useDispatch, useSelector } from "react-redux";
import { IKImage } from 'imagekitio-react';
import { getApidataPaymentMethod } from '../../../Redux/Action/paymentMethodAction';
import { removeFromCart } from '../../../Redux/Action/action';
import { IconButton } from '@mui/material';
import { GrClose } from "react-icons/gr";
import { useTotalPrice } from '../../../CustomeHokkes/useTotalPrice ';
import { calculateDiscountedPrice } from '../../../utils';

const ByuNow = () => {
  const dispatch = useDispatch();

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };
  const cartItems = useSelector((state) => state.cart.cartItems)
  // const totalPrice = useTotalPrice();
  const totalPrice = cartItems.reduce((acc, curr) =>
    curr.prdprice * curr.quantity + acc
    , 0);

  const productId = 'yourProductId';

  const product = cartItems.find(item => item.id === productId);

  // const quantity = product ? product.quantity : 0;
  const DiscountedPrice = (price, discountLabel) => {
    return calculateDiscountedPrice(price, discountLabel);
  };
  const calculateItemTotal = (item) => {
    return item.prddiscount === "enable" ?
      calculateDiscountedPrice(item.prdprice, item.discountlable) * item.quantity :
      item.prdprice * item.quantity;
  };

  // const totalPrice = cartItems.reduce((acc, item) => {
  //   return acc + calculateItemTotal(item);
  // }, 0);

  return (


    <div className="checkout-container overflow-auto scroll" style={{ marginTop: '28px', height: '500px' }}>


      <div className="receipt">
        <h2 className="receipt-heading text-center" style={{ fontFamily: 'monospace' }}>Receipt Summary</h2>
        <div>
          {/* <hr /> */}

          {cartItems.map((item, index) => (
            // <tr key={index}>
            //   <div className='flex justify-end'>
            //     <IconButton aria-label="delete" onClick={() => handleRemoveFromCart(item)} className="hover:text-black text-xs">
            //       <GrClose fontSize="inherit" />
            //     </IconButton>
            //   </div>
            //   <div key={index} className="text-sm flex">
            //     <div className="me-3">
            //       <IKImage
            //         src={JSON.parse(item.prdimg)[0]?.url}
            //         style={{ width: "180px", height: '180px' }}
            //       />

            //     </div>
            //   </div>
            //   <tr>
            //     <td>Name:</td>
            //     <td className='price '> {item.prdname || 'Unknown Item'}</td>
            //   </tr>

            //   <tr>
            //     <td>Quantity:</td>
            //     <td className="quantity price"> {item.quantity}</td>
            //   </tr>
            //   <tr>
            //     <td>MRP:</td>
            //     <td className="price "> {item.prdprice} /-</td>
            //   </tr>
            //   <tr>
            //     <td>Total :</td>
            //     <td className="price "> {item.prdprice * item.quantity} /-</td>
            //   </tr>

            // </tr>

            <div key = { index } className = 'border m-2 p-2' >
              <div className='flex justify-end'>
                <IconButton aria-label="delete" onClick={() => handleRemoveFromCart(item)} className="hover:text-black " style={{ fontSize: '10px' }}>
                  <GrClose fontSize="inherit" />
                </IconButton>
              </div>

              <div className='flex gap-10'>
                <div className='text-start' >
                  <IKImage
                    src={JSON.parse(item.prdimg)[0]?.url}
                    style={{ width: "123px", height: '123px' }}
                    className='rounded-md'
                  />
                </div>
                <div>
                  <p><span className='text-lg font-semibold tracking-wide '>Name : </span> <span className='tracking-wide text-lg'>{item.prdname || 'Unknown Item'}</span></p>
                  <p><span className='text-lg font-semibold tracking-wide'>Quantity  :</span> <span className='tracking-wide text-lg'>{item.quantity}</span></p>
                  <p><span className='text-lg font-semibold tracking-wide'>MRP  : </span>
                  <span className='tracking-wide text-lg'>
                    {/* {item.prddiscount === "enable" ? (
                      <span className="font-medium text-lg text-red">
                        € {DiscountedPrice(item.prdprice, item.discountlable) }
                      </span>
                    ) : (
                      <span className="font-medium text-lg text-red">
                        € {DiscountedPrice(item.prdprice)}
                      </span>
                    )} */}{item.prdprice}
                    </span></p>
                  <p><span className='text-lg font-semibold tracking-wide'>Total : </span> <span className='tracking-wide text-lg'>
                    {/* {item.prddiscount === "enable" ? (
                      <span className="font-medium text-lg text-red">
                        € {DiscountedPrice(item.prdprice, item.discountlable) * item.quantity}
                      </span>
                    ) : (
                      <span className="font-medium text-lg text-red">
                        € {DiscountedPrice(item.prdprice) * item.quantity}
                      </span>
                    )} */}
                    {item.prdprice}
                    </span></p>
                </div>
              </div>
            </div>
          ))}



        <p className=' text-end  tracking-wide  mt-5'>
          <span className='text-xl font-semibold'>Main Total :</span>
          <span className='text-xl tracking-wide'>€ {totalPrice.toFixed(2)}/-</span></p>


      </div>
    </div>

    </div >


  )
}



export default ByuNow;