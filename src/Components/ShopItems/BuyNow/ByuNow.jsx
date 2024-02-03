import React from 'react'
import Navbar from '../../Header/Navbar/Navbar'
import './style/buyNow.css'

const ByuNow = () => {
  return (
    <div>
         <Navbar />
         <div className="">
         <title>Day 002 - Credit Card Checkout</title>
        <div className="checkout-container">
          <div className="left-side">
          </div>
          <div className="right-side">
            <div className="receipt">
              <h2 className="receipt-heading">Receipt Summary</h2>
              <div>
                <table className="table">
                  <tbody><tr>
                      <td>249.50 x 2 nights</td>
                      <td className="price">499.00 USD</td>
                    </tr>
                    <tr>
                      <td>Discount</td>
                      <td className="price">0.00 USD</td>
                    </tr>
                    <tr>
                      <td>Subtotal</td>
                      <td className="price">499.00 USD</td>
                    </tr>
                    <tr>
                      <td>Tax</td>
                      <td className="price">47.41 USD</td>
                    </tr>
                    <tr className="total">
                      <td>Total</td>
                      <td className="price">546.41 USD</td>
                    </tr>
                  </tbody></table>
              </div>
            </div>
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

export default ByuNow
