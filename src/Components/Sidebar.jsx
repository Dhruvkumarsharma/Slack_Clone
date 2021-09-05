import React from 'react';
import { Apps, BookmarkBorder, Create, Drafts, ExpandLess, ExpandMore, FiberManualRecord, FileCopy, Inbox, PeopleAlt } from '@material-ui/icons';
import './sidebar.css';
import SidebarOptions from './SidebarOptions';
import InsertCommentIcon from "@material-ui/icons/InsertComment"
import { useState } from 'react';
import { useEffect } from 'react';
import db from '../config/firebase';
import AddIcon from '@material-ui/icons/Add';
import { connect } from 'react-redux';



const Sidebar = ({ user }) => {
    const [channels, setChannels] = useState([]);
    useEffect(()=>{
        db.collection('rooms').onSnapshot(snapshot=>(
            setChannels(snapshot.docs.map((doc) =>({
                id:doc.id,
                name:doc.data().name,
            }))
            ))
        );
    }, [])
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <div className="sidebar_info">
                    <h2>{user?.email}</h2>
                    <h3>
                        <FiberManualRecord />
                        {user?.displayName}
                    </h3>
                </div>
                <Create />
            </div>
            <SidebarOptions Icon={InsertCommentIcon} title="Threads" />
            <SidebarOptions Icon={Inbox} title="Mentions & Reactions" />
            <SidebarOptions Icon={Drafts} title="Saved items" />
            <SidebarOptions Icon={BookmarkBorder} title="Channel Browser" />
            <SidebarOptions Icon={PeopleAlt} title="People & User groups" />
            <SidebarOptions Icon={Apps} title="Apps" />
            <SidebarOptions Icon={FileCopy} title="File Browser" />
            <SidebarOptions Icon={ExpandLess} title="show less" />
            <hr></hr>
            <SidebarOptions Icon={ AddIcon }  addChannelOption  title="Add Channel" />
            {channels.map(channel=>{
                return <SidebarOptions title={channel.name} id={channel.id} />
            })}
        </div>
    );
}


const mapStateToProps = (store) =>{
    return store;
}

 
export default connect(mapStateToProps, )(Sidebar);

