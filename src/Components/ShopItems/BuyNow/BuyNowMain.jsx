import React, { useState } from 'react'

import Checkout from './checkOutFrom/Checkout'
import './style/BuyNowMain.css'
import './style/ButtonStyle.css'

const BuyNowMain = () => {
    const [step, setStep] = useState(0)
    // console.log('step', step)

    return (
        <div>

            <div className=' grid md:grid-cols-4 text-center grid-clos-2 text-font buy-now-title' style={{ marginTop: '140px' }}>
                <div className={step === 0 ? 'hover-underline-animation' : ''} style={{ fontSize: '25px' }}>
                    {/* style={{ fontFamily:'monospace'}} */}
                    Info
                </div>
                <div className={step === 1 ? 'hover-underline-animation' : ''} style={{ fontSize: '25px' }}>
                    Payment
                </div>
                <div className={step === 2 ? 'hover-underline-animation' : ''} style={{ fontSize: '25px' }}>
                    Book & Review
                </div>
                <div className={step === 3 ? 'hover-underline-animation ' : ''} style={{ fontSize: '25px' }}>
                    Confrimation
                </div>
            </div>
            <hr className='mt-4' />
            <div>
                <Checkout setStep={setStep} step={step} />
            </div>
        </div>
    )
}

export default BuyNowMain
