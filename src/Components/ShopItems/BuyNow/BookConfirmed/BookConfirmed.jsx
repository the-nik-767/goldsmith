import React from 'react'
import '../style/BookConfirmed.css'
import { TfiTicket } from 'react-icons/tfi'

function BookConfirmed() {
    return (
            <div className="chat mt-10">
                <div className="profile">
                    <TfiTicket />
                </div>
                <div className="message">
                    Your Order is Confirmed
                </div>
                <div className="user">
                    Goldsmith
                </div>
            </div>
    )
}

export default BookConfirmed
