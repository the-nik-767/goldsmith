import React, { useState } from 'react';
import AllField from './AllField';
import ByuNow from '../ByuNow';
import Main from '../../../fotter/Main';
import PaymentMain from '../Payment/PaymentMain';

const Checkout = ({ setStep, step }) => {
    const [showAllField, setShowAllField] = useState(true);

    const handleNavigateToPayment = () => {
        setShowAllField(false);
    };
    return (
        <div>

            {showAllField ? (
                <div className=" grid grid-cols-1 md:grid-cols-2">
                    <div className="m-5 order-2 md:order-1" >
                        <AllField onSubmit={handleNavigateToPayment} setStep={setStep} step={step} />
                    </div>
                    <div className='order-1  md:order-2'>
                        <ByuNow />
                    </div>
                </div>
            ) : (
                <PaymentMain setStep={setStep} step={step} />
            )}
        </div>
    );
}

export default Checkout;

