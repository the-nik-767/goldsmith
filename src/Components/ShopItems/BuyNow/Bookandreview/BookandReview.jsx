import React, { useState } from 'react'
import ShowDataBook from './ShowDataBook'
import Paymentdatashow from '../Payment/Paymentdatashow'
import ByuNow from '../ByuNow'
import { Button } from '@mui/material'
import BookConfirmed from '../BookConfirmed/BookConfirmed'
import { Diversity1 } from '@mui/icons-material'


const BookandReview = ({ setStep, step }) => {
  const [showAllField, setShowAllField] = useState(true);

  const handlesubmit = () => {
    setShowAllField(false);

    setStep(++step)

  };
  return (
    <div>
      
      {
        showAllField ? (
          <div>
            <div className=" grid grid-cols-1 md:grid-cols-2 pe-10">
              <div className="paymentdata-show" >
                <Diversity1>
                  <Paymentdatashow />
                </Diversity1>
                <div>
                  <ShowDataBook />
                </div>
              </div>
              <div className="buynow-paymentdata" >
                <ByuNow />
              </div>
            </div>
            <div className="flex justify-center m-5 ">
              <Button variant="contained" color="success" style={{ padding: '10px ,20px', margin: '0px 10px' }} onClick={handlesubmit}>
                Success
              </Button>
            </div>
          </div>
        ) : (
          <BookConfirmed />
        )}

    </div>
  )
}

export default BookandReview
