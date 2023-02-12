import React, { useState } from 'react'
import { useAppContext } from '../AppContext/AppContext';

export default function Input(props) {
  const {currentUser,sendMessage}=useAppContext();
  const [text,setText]=useState('');
  const{roomId}=props;

  const handleSend=(e)=>{
    e.preventDefault();
    sendMessage(roomId,currentUser,text);
    setText('');
  }
  
  return (
    <form className="input" style={{width:'100%',height:'65px'}} onSubmit={handleSend}>
      <input
        type="text"
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <div className="send">
        <button>Send</button>
      </div>
    </form>
  );
}
