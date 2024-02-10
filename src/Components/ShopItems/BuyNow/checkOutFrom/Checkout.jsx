import React, { useState } from 'react';
import Navbar from '../../../Header/Navbar/Navbar';
import AllField from './AllField';
import ByuNow from '../ByuNow';
import Main from '../../../fotter/Main';
import PaymentMain from '../Payment/PaymentMain';

const Checkout = ({setStep,step}) => {
    const [showAllField, setShowAllField] = useState(true);

    const handleNavigateToPayment = () => {
        setShowAllField(false);
    };
    return (
        <>
            <Navbar />
           
            {showAllField ? (
                <div className=" grid grid-cols-1 md:grid-cols-2">
                    <div className="" style={{  }}>
                        <AllField onSubmit={handleNavigateToPayment} setStep={setStep} step={step}/>
                    </div>
                    <div className="" style={{}}>
                    <ByuNow/>

                </div>
                </div>
            ) : (
                <PaymentMain  setStep={setStep} step={step}/>
            )}
            <Main/>
            
        </>
    );
}

export default Checkout;

