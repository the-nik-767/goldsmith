import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Box, MenuItem, TextField } from '@mui/material'
import '../style/PaymentInfo.css'
import { Button } from '@material-tailwind/react';
import axios from 'axios';
import { useTotalPrice } from '../../../../CustomeHokkes/useTotalPrice ';
import { useSelector } from 'react-redux';

const PaymentInfo = ({ onSubmit, setStep, step }) => {
  const [userArray, setBookArray] = useState(JSON.parse(localStorage.getItem("paymentInfo")) || []);
  // const [storedata,setStoreddata]=useState()
  const [anchorEl, setAnchorEl] = useState(null);
  const [dateValue, setDateValue] = useState('');
  const totalPrice = useTotalPrice();

  const validationSchema = yup.object({
    fullName: yup.string().required('Full Name is required'),
    cardNumber: yup.string().required('Card Number is required'),
    expirationOn: yup.string().required('Expiration Month & Year is required'),
    // expirationYear: yup.string().required('Expiration Year is required'),
    cvv: yup.string().required('CVV is required'),
  });

  const formik = useFormik({
    initialValues: {
      fullName: '',
      cardNumber: '',
      expirationOn: '',
      // expirationYear: '',
      cvv: ''
    },
    validationSchema,
    onSubmit: (values) => {
      onSubmit();
      handleSubmit(values);
      handleChange();
    },
  });


  const handleSubmit = (values) => {
    console.log('click handleSubmit')
    const newBook = { ...values }
    const updatedbook = [newBook]
    localStorage.setItem("paymentInfo", JSON.stringify(updatedbook));
    setBookArray(updatedbook);
    console.log('step', step)
    console.log('setStep', setStep)
    setStep(step => step + 1);

  }


  const getCardType = (index) => {
    switch (index) {
      case 0: return "AmEx";
      case 1: return "Discover";
      case 2: return "MasterCard";
      case 3: return "Visa";
      default: return "";
    }
  }

  const handleChange = (event) => {
    let inputValue = event.target.value;

    inputValue = inputValue.replace(/\D/g, '');

    if (inputValue.length > 2) {
      inputValue = inputValue.slice(0, 2) + '/' + inputValue.slice(2);
    }

    if (inputValue.length > 7) {
      inputValue = inputValue.slice(0, 7);
    }

    setDateValue(inputValue);
  };

  const [amount, setAmount] = useState(0);
  // const [orderId, setOrderId] = useState('');
  const [paymentId, setPaymentId] = useState('');
  // const [amount, setAmount] = useState(0);
  const cartItems = useSelector((state) => state.cart.cartItems)

  const createOrder = async () => {
    try {
      const response = await axios.post('https://bfa8-2405-201-200c-d09d-7dfb-9e13-d9b8-e8db.ngrok-free.app/create-order', {
        amount: amount,
      });
      // setOrderId(response.data.id);
    } catch (error) {
      console.error('Error creating order:', error.response.data);
    }
  };
  const handlePayment = async () => {
    // if (!orderId) {
    //   console.error('Order not created yet!');
    //   return;
    // }
    const options = {
      key: 'rzp_test_tH5pilCiuSK4tm',
      amount: totalPrice * 100,
      currency: 'INR',
      name: cartItems[0]?.prdname || 'Product Name',
      description: 'Test Transaction',
      image: cartItems.length > 0 && cartItems[0].prdimg ? JSON.parse(cartItems[0].prdimg)[0]?.url : 'https://www.shutterstock.com/image-illustration/3d-render-golden-rings-isolated-260nw-172133633.jpg',
      // order_id: orderId,
      handler: (response) => {
        console.log('Payment successful:', response);
      },
      prefill: {
        name: 'Krisha Vasoya',
        email: 'xyz@gmail.com',
        contact: '9999999999',
      },
      notes: {
        address: 'Razorpay Corporate Office',
      },
      theme: {
        color: '#3399CC',
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };
  // const handleRefund = async () => {
  //   try {
  //     const response = await axios.post('https://9f2a-2405-201-200c-d09d-e554-6723-6442-ef3b.ngrok-free.app/refund', {
  //       paymentId: paymentId,
  //       amount: amount,
  //     });
  //     if (response.data.success) {
  //       console.log(response.data.message);
  //     } else {
  //       console.error(response.data.error);
  //     }
  //   } catch (error) {
  //     console.error('Error refunding payment:', error);
  //   }
  // };
  return (
    <div>
      <div>
        <h1>Razorpay Payment</h1>
        <label>
          Enter Amount:
          <input type="number" value={totalPrice} onChange={(e) => setAmount(e.target.value)} />
        </label><br />
        <button onClick={createOrder}>Create Order</button>
        {totalPrice && (
          <div>
            {/* <p>Order created with ID: {orderId}</p> */}
            <Button onClick={handlePayment}>Proceed to Payment</Button>
          </div>
        )}
      </div>
      {/* <div style={{ marginTop: "100px" }}>
        <h1>Refund Payment</h1>
        <label>Payment Id: </label>
        <input type="text" value={paymentId} onChange={(e) => setPaymentId(e.target.value)} /><br />
        <label>Amount: </label>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} /><br />
        <button onClick={handleRefund}>Refund Payment</button>
      </div> */}
    </div>
  );
}

export default PaymentInfo;
