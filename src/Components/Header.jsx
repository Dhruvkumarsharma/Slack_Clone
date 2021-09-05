import React from 'react';
import { Avatar } from "@material-ui/core";
import { AccessTime, HelpOutline, Search } from '@material-ui/icons'
import "./Header.css";
import { connect } from 'react-redux';



const Header = ({ user }) => {
    console.log(user);
    return ( 
       <div className="header">
           <div className='header_left'>
                <Avatar 
                    className='header_avatar'
                    alt={user?.displayName}
                    src={user?.photoURL}
                />
                <AccessTime/>
           </div>
           <div className='header_mid'>
               <Search/>
               <input type="text" placeholder="Search here" />
           </div>
           <div className='header_right'>
               <HelpOutline/>
           </div>
       </div>
     );
}

const mapStateToProps = (store) =>{
    return store;
}

 
export default connect(mapStateToProps, )(Header);