import React, { useEffect } from 'react'
import { useAppContext } from '../AppContext/AppContext'
import Message from './Message'


export default function Messages(props) {
  const {messages}=props;
  const {currentUser}=useAppContext();

  useEffect(()=>{
    var messageBody = document.querySelector('.messages');
    messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;   
  },[messages])
  
  return (
    <>
      <div className='messages'>
        {messages.map((x)=><Message key={x.id} message={x} isOwnMessage={x.uid===currentUser.uid}/>)}
      </div>
    </>
  )
}
