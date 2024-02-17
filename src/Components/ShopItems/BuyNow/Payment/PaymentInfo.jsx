import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Box, MenuItem, TextField } from '@mui/material'
import '../style/PaymentInfo.css'

const PaymentInfo = ({ onSubmit, setStep, step }) => {
  const [userArray, setBookArray] = useState(JSON.parse(localStorage.getItem("paymentInfo")) || []);
  // const [storedata,setStoreddata]=useState()
  const validationSchema = yup.object({
    fullName: yup.string().required('Full Name is required'),
    cardNumber: yup.string().required('Card Number is required'),
    expirationMonth: yup.string().required('Expiration Month is required'),
    expirationYear: yup.string().required('Expiration Year is required'),
    cvv: yup.string().required('CVV is required'),
  });

  const formik = useFormik({
    initialValues: {
      fullName: '',
      cardNumber: '',
      expirationMonth: '',
      expirationYear: '',
      cvv: ''
    },
    validationSchema,
    onSubmit: (values) => {
      onSubmit();
      handleSubmit(values);
    },
  });

  const handleSubmit = (values) => {
    const newBook = { ...values }
    const updatedbook = [newBook]
    localStorage.setItem("paymentInfo", JSON.stringify(updatedbook));
    setBookArray(updatedbook);
    setStep(++step)
  }


  return (
    <div>
      <div
        className="payment-info payment-info-container"
        style={{ margin: "10px 0px 5px 15px" }}
      >
        <div className=" flex justify-between iconswrap">
          <h2
            className=" text-slate-700 text-font tracking-wide p-3"
            style={{ fontSize: "28px" }}
          >
            Payment Information
          </h2>
          <div
            class="rsBox"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "5px",
              alignItems: "center",
            }}
            className=''
          >
            <img
              src="https://book.rentylresorts.com/images/creditCardLogos/AmEx.svg"
              alt="credit card logos"
              className="PaymentLogoImage"
            />
            <img
              src="https://book.rentylresorts.com/images/creditCardLogos/Discover.svg"
              alt="credit card logos"
              className="PaymentLogoImage"
            />
            <img
              src="https://book.rentylresorts.com/images/creditCardLogos/MasterCard.svg"
              alt="credit card logos"
              className="PaymentLogoImage"
            />
            <img
              src="https://book.rentylresorts.com/images/creditCardLogos/Visa.svg"
              alt="credit card logos"
              className="PaymentLogoImage"
            />
            <div class="rsLabel body1">and more...</div>
          </div>
        </div>
        <hr style={{ margin: "0" }} />
        <hr />
        <form
          className="form-box p-2"
          encType="text/plain"
          method="get"
          target="_blank"
        >
          <Box>
            <TextField
              styles={{
                control: (provided, state) => ({
                  ...provided,
                  border: "none",
                  boxShadow: "none",
                }),
                menu: (provided, state) => ({
                  ...provided,
                  border: "none",
                  boxShadow: "none",
                }),
              }}
              label="Full Name"
              variant="standard"
              style={{ padding: "0px 7px", width: "100%" }}
              id="fullName"
              name="fullName"
              placeholder="Satoshi Nakamoto"
              required
              type="text"
              value={formik.values.fullName}
              onChange={formik.handleChange}
              error={formik.touched.fullName && Boolean(formik.errors.fullName)}
              helperText={formik.touched.fullName && formik.errors.fullName}
            />
            <TextField
              styles={{
                control: (provided, state) => ({
                  ...provided,
                  border: "none",
                  boxShadow: "none",
                }),
                menu: (provided, state) => ({
                  ...provided,
                  border: "none",
                  boxShadow: "none",
                }),
              }}
              label="cardNumber"
              variant="standard"
              id="cardNumber"
              style={{ padding: "0px 7px", width: "100%" }}
              name="cardNumber"
              placeholder="1111-2222-3333-4444"
              required
              type="number"
              value={formik.values.cardNumber}
              onChange={formik.handleChange}
              error={
                formik.touched.cardNumber && Boolean(formik.errors.cardNumber)
              }
              helperText={formik.touched.cardNumber && formik.errors.cardNumber}
            />
          </Box>

          <Box
            style={{ padding: "5px 5px" }}
            className="grid md:grid-cols-3 grid-cols-1"
          >
            <p
              className="expires"
              style={{ paddingTop: "35px", width: "100%" }}
            >
              ExpiresOn
            </p>
            <Box className="card-experation">
              <Box>
                <TextField
                  label="Month"
                  variant="standard"
                  id="expiration-month"
                  name="expirationMonth"
                  placeholder="Month"
                  required
                  value={formik.values.expirationMonth}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.expirationMonth &&
                    Boolean(formik.errors.expirationMonth)
                  }
                  helperText={
                    formik.touched.expirationMonth &&
                    formik.errors.expirationMonth
                  }
                  select
                  style={{ width: "150px", marginLeft: "" }}
                  styles={{
                    root: {
                      "& .MuiOutlinedInput-root": {
                        "&:hover fieldset": {
                          borderColor: "none",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "none",
                        },
                      },
                    },
                  }}
                >
                  <MenuItem value="">Month:</MenuItem>
                  <MenuItem value="January">January</MenuItem>
                  <MenuItem value="February">February</MenuItem>
                  <MenuItem value="March">March</MenuItem>
                  <MenuItem value="April">April</MenuItem>
                  <MenuItem value="May">May</MenuItem>
                  <MenuItem value="June">June</MenuItem>
                  <MenuItem value="July">July</MenuItem>
                  <MenuItem value="August">August</MenuItem>
                  <MenuItem value="September">September</MenuItem>
                  <MenuItem value="October">October</MenuItem>
                  <MenuItem value="November">November</MenuItem>
                  <MenuItem value="December">December</MenuItem>
                </TextField>
              </Box>
              <Box>
                <TextField
                  id="expiration-year"
                  name="expirationYear"
                  variant="standard"
                  placeholder="Years"
                  label="Year"
                  required
                  value={formik.values.expirationYear}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.expirationYear &&
                    Boolean(formik.errors.expirationYear)
                  }
                  helperText={
                    formik.touched.expirationYear &&
                    formik.errors.expirationYear
                  }
                  select
                  style={{ width: "150px", marginLeft: "10px" }}
                  styles={{
                    root: {
                      "& .MuiOutlinedInput-root": {
                        "&:hover fieldset": {
                          borderColor: "none",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "none",
                        },
                      },
                    },
                  }}
                >
                  <MenuItem value="">Year</MenuItem>
                  <MenuItem value="2023">2024</MenuItem>
                  <MenuItem value="2024">2025</MenuItem>
                  <MenuItem value="2025">2026</MenuItem>
                  <MenuItem value="2025">2027</MenuItem>
                  <MenuItem value="2025">2028</MenuItem>
                </TextField>
              </Box>
            </Box>
          </Box>
          <Box style={{ padding: "5px 5px" }}>
            <TextField
              styles={{
                control: (provided, state) => ({
                  ...provided,
                  border: "none",
                  boxShadow: "none",
                }),
                menu: (provided, state) => ({
                  ...provided,
                  border: "none",
                  boxShadow: "none",
                }),
              }}
              id="cvv"
              name="cvv"
              style={{ width: "100%" }}
              variant="standard"
              label="CVV"
              placeholder="415"
              type="number"
              required
              value={formik.values.cvv}
              onChange={formik.handleChange}
              error={formik.touched.cvv && Boolean(formik.errors.cvv)}
              helperText={formik.touched.cvv && formik.errors.cvv}
            />
            <a className="cvv-info" href="#">
              What is CVV?
            </a>
          </Box>
          <Box class="outer">
            <div class="button1">
              <button
                class="rounded p-2 text-center text"
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  formik.handleSubmit();
                }}
              >
                Book Securely
              </button>
            </div>
          </Box>
        </form>
        <p className="footer-text">
          <i className="fa-solid fa-lock" />
          Your credit card information is encrypted
        </p>
      </div>
    </div>
  );
}

export default PaymentInfo;
