import React, { useState, useEffect }  from 'react'
import Paymentdatashow from './Paymentdatashow'
import PaymentInfo from './PaymentInfo'
import ByuNow from '../ByuNow'
import BookandReview from '../Bookandreview/BookandReview'

const PaymentMain = ({setStep , step}) => {
  const [showAllField, setShowAllField] = useState(true);

  const handlesubmit = () => {
      setShowAllField(false);
  };
  return (
    <div>
   
        {showAllField ? (
                <div className=" grid grid-cols-1 md:grid-cols-2">
                    <div>
                        <Paymentdatashow  />
                        
                        <PaymentInfo  onSubmit={handlesubmit}  setStep={setStep} step={step}/>
                    </div>
                    <div>
                    <ByuNow/>

                </div>
                </div>
            ) : (
                <BookandReview  setStep={setStep} step={step}/>
            )}
    </div>
  )
}

export default PaymentMain
