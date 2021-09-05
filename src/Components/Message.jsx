import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Message.css";

const Message = ( { message, timestamp, user, userImage } ) => {
    return ( 
        <div className="message">
            <img src={userImage} />
            <div className="message-info">
                <h4>
                    { user } 
                    <span className="message-timeStamp">{  new Date(timestamp?.toDate()).toUTCString()}</span>
                </h4>
                <p>{ message }</p>
            </div>
        </div>
     );
}
 
export default Message;