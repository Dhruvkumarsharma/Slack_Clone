import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import db from '../config/firebase';
import "./ChatInput.css";
import firebase from 'firebase';


const ChatInput = ({ channelName, channelId, user }) => {
    const [ input, setInput ] = useState("");
    const sendMessage = (e) =>{
        e.preventDefault();

        if(channelId) {
            db.collection('rooms').doc(channelId).collection('messages').add({
                message:input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                user: user.displayName,
                userImage:user.photoURL,
            })
        }
        setInput("");
    }
    return ( 
        <div className="chat-input">
            <form>
                <input value={input} onChange={(e)=>setInput(e.target.value)} placeholder={`Message #${channelName?.toLowerCase()}`} />
                <button type='submit' onClick={sendMessage} >SEND</button>
            </form>
        </div>
     );
}

const mapStateToProps = (store) => {
    return store;
}
 
export default connect(mapStateToProps,)(ChatInput);