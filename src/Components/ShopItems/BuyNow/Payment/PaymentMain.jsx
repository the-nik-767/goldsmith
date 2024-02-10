import React, { useState, useEffect }  from 'react'
import Navbar from '../../../Header/Navbar/Navbar'
import Paymentdatashow from './Paymentdatashow'
import PaymentInfo from './PaymentInfo'
import Checkout from '../checkOutFrom/Checkout'
import ByuNow from '../ByuNow'
import BookandReview from '../Bookandreview/BookandReview'

const PaymentMain = ({setStep , step}) => {
  const [showAllField, setShowAllField] = useState(true);

  const handlesubmit = () => {
      setShowAllField(false);
  };
  return (
    <>
    <Navbar/>
        {/* <div className=" grid  grid-cols-1 md:grid-cols-2" style={{marginTop:'10px'}}>
          <div className=" rounded" style={{borderRadius: "10px", boxShadow: '2px 2px 10px 3px gray' ,marginLeft:'10px'}} >
            <Paymentdatashow/>
            <PaymentInfo />
          </div>
          <div className="" >
           <ByuNow/>
          </div>
        </div> */}
        {showAllField ? (
                <div className=" grid grid-cols-1 md:grid-cols-2">
                    <div className="" style={{  }}>
                        <Paymentdatashow  />
                        
                        <PaymentInfo  onSubmit={handlesubmit}  setStep={setStep} step={step}/>
                    </div>
                    <div className="" style={{}}>
                    <ByuNow/>

                </div>
                </div>
            ) : (
                <BookandReview  setStep={setStep} step={step}/>
            )}
    </>
  )
}

export default PaymentMain
