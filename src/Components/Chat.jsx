import React, { useEffect, useState } from 'react';
import './Chat.css';
import { useParams  } from 'react-router-dom';
import { InfoOutlined, StarBorderOutlined } from '@material-ui/icons';
import db from '../config/firebase';
import Message from './Message';
import ChatInput from './ChatInput';

const Chat = () => {
    const { roomId } = useParams();
    const [ roomDetails, setRoomDetails ] = useState(null);
    const [ roomMessages, setRoomMessages ] = useState([]);

    useEffect(()=>{
        if(roomId){
            db.collection('rooms').doc(roomId).onSnapshot(snapshot=>(
                setRoomDetails(snapshot.data())
            ))
        }


        db.collection('rooms').doc(roomId).collection('messages').orderBy('timestamp', 'asc')
        .onSnapshot(snapshot=>
            setRoomMessages(
                snapshot.docs.map((doc) => doc.data())
            )
        )

    }, [roomId])


    console.log(roomMessages);

    return ( 
        <div className="chat">
            <div className="chat-header">
                <div className="chat-header-left">
                    <h4 className="chat-channelName">
                        <strong># { roomDetails?.name }</strong>
                        <StarBorderOutlined />
                    </h4>
                </div>
                <div className="chat-header-right">
                    <p>
                        <InfoOutlined/> Delails
                    </p>
                </div>
            </div>
            <div className="chat-messages">
                {roomMessages.map(({message, timestamp, user, userImage}) => {
                    return <Message
                    message={message}
                    timestamp={timestamp}
                    user={user}
                    userImage={userImage}                    
                    />
                })}
            </div>
            <ChatInput  channelName={roomDetails?.name} channelId={ roomId }/>
        </div>
     );
}
 
export default Chat;