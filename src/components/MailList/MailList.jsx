import React from 'react'
import "./MailList.css"

const MailList = () => {
    return (
        <div className='mailList'>
            <h1 className='mlTitle'>Save time, save money!</h1>
            <p className='mlDesc'>Signup and get the best deals for you!</p>
            <form className='mlEmail' onSubmit={e => e.preventDefault()}>
                <input type="email" placeholder='Your Email!' />
                <button type='submit'>Subscribe</button>
            </form>
        </div>
    )
}

export default MailList