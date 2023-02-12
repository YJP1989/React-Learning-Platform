import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { useAppContext } from '../AppContext/AppContext';
import './chat.css';
import { groupRooms } from './Groups';
import Input from './Input';
import Messages from './Messages';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';

export default function Chat() {
  const { getMessage } = useAppContext()
  const [messages, setMessages] = useState([]);

  const params = useParams();
  const room = groupRooms.find((x) => x.id === params.id);

  useEffect(() => {
    getMessage(room.id, setMessages)
  }, [room.id])

  return (
    <>
      <h2 style={{ textAlign: 'center' }}>{room.title}</h2>
      <div style={{ textAlign: 'center' }}>
        <Link to='/groups' style={{ textDecoration: 'none' }}><h6><FontAwesomeIcon icon={faLeftLong} /> Back to all groups</h6></Link>
      </div>
      <div className='chat' style={{ marginLeft: '20%' }}>
        <Messages messages={messages} />
        <Input roomId={room.id} />
      </div>
    </>
  )
}
