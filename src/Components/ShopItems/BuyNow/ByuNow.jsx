import React from 'react'
import Navbar from '../../Header/Navbar/Navbar'
import './style/buyNow.css'
import {  useSelector } from "react-redux";

const ByuNow = ({ updateCartItemQuantity, handleComponentChange }) => {
  const cartItems = useSelector((state) => state.cart.cartItems)
  const checkedItems = cartItems.filter(item => item.isChecked);
  console.log('cartItems',cartItems)
  console.log('checkedItems',checkedItems)
  const totalPrice = checkedItems.reduce((acc, curr) =>
    curr.price * curr.quantity + acc
    , 0);
  console.log("totalPrice", totalPrice)
  const productId = 'yourProductId';

  const product = cartItems.find(item => item.id === productId);

  const quantity = product ? product.quantity : 0;
  // console.log('cartItems', cartItems)


  return (
    <div>
      <div className="backSide">
        <title>Day 002 - Credit Card Checkout</title>
        <div className="checkout-container flex" style={{ marginTop: '10px', height: 'auto' }}>

          <div className="right-side">
            <div className="receipt">
              <h2 className="receipt-heading text-center" style={{ fontFamily: 'monospace' }}>Receipt Summary</h2>
              <div>
                <table className="table ">
                  <tbody>

                    {cartItems.map((item, index) => (

                      <tr key={index}>
                        <div key={index} className="text-sm flex">
                          <div className="me-3">
                            <img
                              src={item.Img}
                              alt={`Product ${index}`}
                              style={{ height: "180px", width: "180px" }}
                            />

                          </div>
                        </div>
                        <tr>
                          <td>Name:</td>
                          <td className='price'> {item.title || 'Unknown Item'}</td>
                        </tr>

                        <tr>
                          <td>Quantity:</td>
                          <td className="quantity price"> {item.quantity}</td>
                        </tr>
                        <tr>
                          <td>MRP:</td>
                          <td className="price "> {item.price} /-</td>
                        </tr>
                        <tr>
                          <td>Total :</td>
                          <td className="price "> {item.price * item.quantity} /-</td>
                        </tr>

                      </tr>

                    ))}<hr />
                  </tbody>
                  <tr className="total ">
                    <td >Main Total : {totalPrice}</td>

                  </tr>
                </table>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}



export default ByuNow;