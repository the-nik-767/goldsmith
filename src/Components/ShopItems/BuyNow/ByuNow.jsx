import React from 'react'
import Navbar from '../../Header/Navbar/Navbar'
import './style/buyNow.css'
import { connect } from "react-redux";

const ByuNow = ({ cartItems, updateCartItemQuantity }) => {

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  const productId = 'yourProductId';

  const product = cartItems.find(item => item.id === productId);

  const quantity = product ? product.quantity : 0;
  console.log('cartItems', cartItems)
  return (
    <div>
      <Navbar />
      <div className="backSide">
        <title>Day 002 - Credit Card Checkout</title>
        <div className="checkout-container" style={{ marginTop: '100px' }}>
          <div className="left-side">
            {/* {cartItems.map((item, index) => (
              <div key={index} className="text-sm flex">
                <div className="me-3">
                  <img
                    src={item.Img}
                    alt={`Product ${index}`}
                    style={{ height: "80px", width: "80px" }}
                  />
                  
                  </div>
                </div>
                  ))} */}
          </div>
          <div className="right-side">
            <div className="receipt">
              <h2 className="receipt-heading">Receipt Summary</h2>
              <div>
                <table className="table">
                  <tbody>

                    {cartItems.map((item, index) => (
                      <tr key={index}>
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
                          <td className="price "> {item.price*item.quantity} /-</td>
                        </tr>
                      </tr>
                      
                    ))}
                    <tr>
                      <td>Tax :</td>
                      <td className="price">{(totalPrice * 0.05).toFixed(2)} /-</td>
                    </tr>
                    <tr className="total">
                      <td>Total :</td>
                      <td className="price">{(totalPrice * 1.05).toFixed(2)} /-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div><hr />
            <div className="payment-info">
              <h3 className="payment-heading">Payment Information</h3>
              <form className="form-box" encType="text/plain" method="get" target="_blank">
                <div>
                  <label htmlFor="full-name">Full Name</label>
                  <input id="full-name" name="full-name" placeholder="Satoshi Nakamoto" required type="text" />
                </div>
                <div>
                  <label htmlFor="credit-card-num">Card Number
                    <span className="card-logos">
                      <i className="card-logo fa-brands fa-cc-visa" />
                      <i className="card-logo fa-brands fa-cc-amex" />
                      <i className="card-logo fa-brands fa-cc-mastercard" />
                      <i className="card-logo fa-brands fa-cc-discover" /> </span></label>
                  <input id="credit-card-num" name="credit-card-num" placeholder="1111-2222-3333-4444" required type="text" />
                </div>
                <div>
                  <p className="expires">Expires on:</p>
                  <div className="card-experation">
                    <label htmlFor="expiration-month">Month</label>
                    <select id="expiration-month" name="expiration-month" required>
                      <option value>Month:</option>
                      <option value>January</option>
                      <option value>February</option>
                      <option value>March</option>
                      <option value>April</option>
                      <option value>May</option>
                      <option value>June</option>
                      <option value>July</option>
                      <option value>August</option>
                      <option value>September</option>
                      <option value>October</option>
                      <option value>November</option>
                      <option value>Decemeber</option>
                    </select>
                    <label className="expiration-year">Year</label>
                    <select id="experation-year" name="experation-year" required>
                      <option value>Year</option>
                      <option value>2023</option>
                      <option value>2024</option>
                      <option value>2025</option>
                      <option value>2026</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="cvv">CVV</label>
                  <input id="cvv" name="cvv" placeholder={415} type="text" required />
                  <a className="cvv-info" href="#">What is CVV?</a>
                </div>
                <button className="btn">
                  <i className="fa-solid fa-lock" /> Book Securely
                </button>
              </form>
              <p className="footer-text">
                <i className="fa-solid fa-lock" />
                Your credit card infomration is encrypted
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
      )
}
const mapStateToProps = state => ({
        cartItems: state.cart.cartItems,
});

      export default connect(mapStateToProps)(ByuNow);