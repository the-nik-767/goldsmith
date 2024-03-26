import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import '../style/PaymentInfo.css'
import { Button } from '@material-tailwind/react';
import axios from 'axios';
import { useTotalPrice } from '../../../../CustomeHokkes/useTotalPrice ';
import { useDispatch, useSelector } from 'react-redux';
import Logoimage from '../../../../assets/image/Logo.png'
import ApiClient from '../../../../method/ApiClient';
import { PAYMENT_DETAILS } from '../../../../Redux/Type/type';
import { getApidataPaymentMethod } from '../../../../Redux/Action/paymentMethodAction';
import { paymentDetalisAction } from '../../../../Redux/Action/action';
import { calculateDiscountedPrice } from '../../../../utils';

const PaymentInfo = ({ onSubmit, setStep, step }) => {
  const userdata=JSON.parse(localStorage.getItem("UserLoginData"))
  const userdata1=JSON.parse(localStorage.getItem("userArray"))
 
  const [userArray, setBookArray] = useState(JSON.parse(localStorage.getItem("paymentInfo")) || []);
  const [dateValue, setDateValue] = useState('');
  
    const [amount, setAmount] = useState(0);
    const [orderId, setOrderId] = useState('');
    const [paymentId, setPaymentId] = useState('');
    const cartItems = useSelector((state) => state.cart.cartItems)
    const pmdata = useSelector((state) => state.payment.paymentData)
    
  const calculateItemTotal = (item) => {
    return item.prddiscount === "enable" ?
      calculateDiscountedPrice(item.prdprice, item.discountlable) * item.quantity :
      item.prdprice * item.quantity;
  };
  
  const totalPrice = cartItems.reduce((acc, curr) =>
    curr.prdprice * curr.quantity + acc
    , 0);
    const totalPrice1=totalPrice.toFixed(2);
  const dispatch = useDispatch()

  const validationSchema = yup.object({
    fullName: yup.string().required('Full Name is required'),
    cardNumber: yup.string().required('Card Number is required'),
    expirationOn: yup.string().required('Expiration Month & Year is required'),
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
    const newBook = { ...values }
    const updatedbook = [newBook]
    localStorage.setItem("paymentInfo", JSON.stringify(updatedbook));
    setBookArray(updatedbook);
    setStep(step => step + 1);

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
  useEffect(() => {
    if (orderId) {
      const options = {
        key: 'rzp_test_tH5pilCiuSK4tm',
        // amount: amount * 100,
        amount: totalPrice1 * 100,
        currency: 'EUR',
        name: 'stellare bijoux',
        description: 'Test Transaction',
        image: Logoimage,
        order_id: orderId,
        handler: handlePaymentSuccess,
        prefill: {
          name:userdata1.fname ,
          email: userdata.email,
          contact: userdata1.phone,
        },
        notes: {
          address: 'Razorpay Corporate Office',
        },
        theme: {
          color: '#454545',
        },
      };
      const rzp = new window.Razorpay(options);
      rzp.open();
    }
  }, [orderId, totalPrice]);

  const handlePayment = async () => {
    try {
      const response = await ApiClient.post('create-order', {
        amount: totalPrice,
      });
      setOrderId(response.id);
    } catch (error) {
      console.error('Error creating order:', error.response);
    }
  };
  const userID = JSON.parse(localStorage.getItem("UserLoginData"));
  const handlePaymentSuccess = (response) => {
    const userInfo = JSON.parse(localStorage.getItem("userArray"));
    if (!userInfo) {
      return;
    }

    const pmdata = [{
      razorpay_order_id: response.razorpay_order_id,
      razorpay_payment_id: response.razorpay_payment_id,
      razorpay_signature: response.razorpay_signature,
      // status: "pending"
    }];

    const payload = {
      userId: userID.userId,
      fname: userInfo.fname,
      lname: userInfo.lname,
      addLine1: userInfo.addLine1,
      addLine2: userInfo.addLine2,
      pincode: userInfo.pincode,
      city: userInfo.city,
      email: userInfo.email,
      country: userInfo.country,
      state: userInfo.state,
      phone: userInfo.phone,
      metadata: cartItems.map(item => ({
        status: "pending",
        prdname: item.prdname,
        quantity: item.quantity,
        prdprice: item.prdprice,
        prdimg:item.prdimg,
        id:item.id
      })),
      pmdata: pmdata
    };

    dispatch(paymentDetalisAction(payload));
    dispatch(getApidataPaymentMethod(payload))
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
      <div className='m-5'>
        <h1>Razorpay Payment</h1>
        <label>
          Enter Amount:
          <input type="number" value={totalPrice} onChange={(e) => setAmount(e.target.value)} />
        </label><br />
        {/* <button onClick={createOrder}>Create Order</button> */}

        <div>
          {/* <p>Order created with ID: {orderId}</p> */}
          <Button onClick={handlePayment}>Proceed to Payment</Button>
        </div>

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
