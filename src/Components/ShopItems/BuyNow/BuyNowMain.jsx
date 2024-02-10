import React, { useState } from 'react'
import Navbar from '../../Header/Navbar/Navbar'
import ByuNow from './ByuNow'
import Checkout from './checkOutFrom/Checkout'
import PaymentMain from './Payment/PaymentMain'
import { setActive } from '@material-tailwind/react/components/Tabs/TabsContext'
import './style/BuyNowMain.css'
import './style/ButtonStyle.css'

const BuyNowMain = () => {
    const [step, setStep] = useState(0)
    console.log('step', step)
    
    return (
        <>
            <Navbar />
            <div className=' grid md:grid-cols-4 text-center grid-clos-2' style={{ marginTop: '100px' }}>
                <div className={step === 0 ? 'hover-underline-animation' : ''} style={{fontSize:'25px' , fontFamily:'monospace'}}>
                    {/* style={{ fontFamily:'monospace'}} */}
                    Info
                </div>
                <div className={step === 1 ? 'hover-underline-animation' : ''} style={{fontSize:'25px' , fontFamily:'monospace'}}>
                    Payment
                </div>
                <div className={step === 2 ? 'hover-underline-animation' : ''}style={{fontSize:'25px' , fontFamily:'monospace'}}>
                    Book & Review
                </div>
                <div className={step === 3 ? 'hover-underline-animation ' : ''}style={{fontSize:'25px' , fontFamily:'monospace'}}>
                    Confrimation
                </div>
            </div>
            <hr className='mt-4' />
            <div className="">
                <Checkout setStep={setStep} step={step} />
            </div>
        </>
    )
}

export default BuyNowMain