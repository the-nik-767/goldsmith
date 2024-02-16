import React, { useState } from 'react'
import Navbar from '../../../Header/Navbar/Navbar'
import ShowDataBook from './ShowDataBook'
import Paymentdatashow from '../Payment/Paymentdatashow'
import ByuNow from '../ByuNow'
import { Button } from '@mui/material'
import BookConfirmed from '../BookConfirmed/BookConfirmed'


const BookandReview = ({ setStep, step }) => {
  const [showAllField, setShowAllField] = useState(true);

  const handlesubmit = () => {
    setShowAllField(false);

    setStep(++step)

  };
  return (
    <>
      <Navbar />
      {/* <div className=" grid grid-cols-1 md:grid-cols-3 ">
        <Paymentdatashow />
        <ShowDataBook />
        <ByuNow />
      </div>
      <div className="flex justify-end m-5 ">
        <Button variant="contained" color="success" style={{ padding: '10px ,20px', margin: '0px 10px' }} onClick={handlesubmit}>
          Success
        </Button>
      </div> */}
      {
        showAllField ? (
          <div>
            <div className="  grid grid-cols-1 md:grid-cols-2 ">
              <div className="paymentdata-show" >
                <div className="">
                  <Paymentdatashow />
                </div>
                <div className="">
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

    </>
  )
}

export default BookandReview
