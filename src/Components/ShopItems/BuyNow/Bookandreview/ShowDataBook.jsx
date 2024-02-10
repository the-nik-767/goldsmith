import React, { useEffect, useState } from 'react'
import '../style/PaymentInfo.css'

const ShowDataBook = () => {
    const [book, setBook] = useState([])

    useEffect(() => {
        const storedBookData = JSON.parse(localStorage.getItem('paymentInfo')) || [];
        if (Array.isArray(storedBookData)) {
            setBook(storedBookData);
        }
    }, [])
    console.log('book', book)
    return (
        <div>
            <div>
                <div className="payment-info-container" style={{ margin: '10px 0px 5px 15px' }}>
                    <h2 className="payment-heading text-slate-700 font-medium font-3xl  p-5" style={{ fontFamily: 'monospace', backgroundColor: '#e7e6e573', fontSize: '34px' }} >Payment Information  </h2><hr style={{ margin: '0' }} />
                    <hr /> {book.map((user, index) => (
                        <div key={index}>
                            <div className="flex">
                            <div class="rsBox" style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                                <img src="https://book.rentylresorts.com/images/creditCardLogos/AmEx.svg" alt="credit card logos" />
                            </div>
                            <p style={{ padding: '10px', fontSize: '20px' }}>  {user.fullName}</p>
                            </div>
                            <p style={{ padding: '10px', fontSize: '20px' }}> {user.cardNumber}</p>
                            {/* <p style={{ padding: '10px'  ,fontSize:'20px'}}> {user.expirationMonth}</p>
                            <p style={{ padding: '10px' ,fontSize:'20px' }}> {user.expirationYear}</p> */}
                            <p style={{ padding: '10px', fontSize: '20px' }}> {user.cvv}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ShowDataBook
