import React from 'react'

export default function Message(props) {
    const { message, isOwnMessage } = props;

    return (
        <div>
            {isOwnMessage ? <div className="own-message">
                <div className="messageContent">
                    <p className='sender' style={{ color: 'grey' }}>You</p>
                    <h6>{message.text}</h6>
                </div>
                <div className="messageInfo">
                    <h5 className='sender'></h5>
                </div>
            </div> : <div>
                <div className="others-message">
                    <div className="messageInfo">
                        <img style={{ width: '50px', height: '50px', borderRadius: '10px' }} src={message.photoURL} alt={message.displayName} />
                    </div>
                    <div className="messageContent">
                        <p className='sender' style={{ color: 'grey' }}>{message.displayName}</p>
                        <h6>{message.text}</h6>
                    </div>
                </div>
            </div>}
        </div>
    )
}
