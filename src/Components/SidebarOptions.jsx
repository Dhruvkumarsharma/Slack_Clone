import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import db from '../config/firebase';
import './SidebarOptions.css';


const SidebarOptions = ({ Icon, title,id,  addChannelOption }) => {
    const history = useHistory();
    const selectChannel = () => {
        if(id){
            history.push(`/rooms/${id}`);
        }else{
            history.push(title);
        }
    }


    const addChannel = () => {
        const channelName = prompt('please enter the channel name');

        if(channelName) {
            db.collection('rooms').add({
                name:channelName,
            })
        }
    }

    return ( 
        <div className='sidebar-options' onClick={addChannelOption? addChannel : selectChannel}> 
            {Icon && <Icon className="sidebarOption_icon"/>}
            {Icon ?(
                <h3>{title}</h3>
            ):(<h3 className="sidebar-option_channel">
                <span className='sidebarOptions_hash'># {title}</span>
            </h3>)}
        </div>
     );
}
 
export default SidebarOptions;