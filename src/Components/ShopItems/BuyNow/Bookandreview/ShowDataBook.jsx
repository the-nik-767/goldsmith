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
    return (
                <div className="payment-info-container" >
                    <h2 className=" text-slate-700 text-font tracking-wide p-3"
            style={{ fontSize: "28px" }} >Payment Information  </h2><hr style={{ margin: '0' }} />
                    <hr /> {book.map((user, index) => (
                        <div key={index}>
                            <div className="flex px-2">
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
    )
}

export default ShowDataBook
