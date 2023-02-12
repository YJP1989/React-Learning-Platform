import React from 'react'
import { faComputer } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'

export default function Contact() {
  return (
    <>
      <div className='contact-us mt-5'>
        <h1>Contact Us</h1><br /><hr />
        <h2><FontAwesomeIcon icon={faComputer} />  Email address</h2><br></br>
        <h3 className='email'><a href='https://mail.google.com/'>YUJIAPENG0625@GMAIL.COM</a></h3>
        <br /><hr />
        <h2><FontAwesomeIcon icon={faPhone} />  Phone</h2><br></br>
        <h3>86082785</h3><br /><hr />
        <h2><FontAwesomeIcon icon={faLocationArrow} />  Location</h2><br></br>
        <h3>Singapore ... </h3><br /><hr />
      </div>
    </>
  )
}
