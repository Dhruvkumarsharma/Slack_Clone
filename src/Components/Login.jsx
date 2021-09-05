import React, { useState } from 'react';
import "./Login.css";
import logo from '../image/logo.png';
import { Button } from '@material-ui/core';
import { auth, provider } from '../config/firebase';
import {  addUser } from '../Context/reducer';
import { connect } from 'react-redux';



const Login = ( {addUser} ) => { 

    const signin = () => {
        auth.signInWithPopup(provider).then(result=>{
            console.log(result);
            addUser(result.user);
        }).catch((error) => {
            alert(error.message);
        });
    }


    return ( 
        <div className="login">
            <div className="login-container">
                <img  src={logo}></img>
                <h1>SignIn To Slack</h1>
                <Button onClick={signin} >Sign In with Google</Button>
            </div>
        </div>
     );
}

const mapDispatchToProps =( dispatch ) => {
    return {
        addUser : (user) => dispatch(addUser(user)),
    };
};
 
export default connect(null , mapDispatchToProps)(Login);