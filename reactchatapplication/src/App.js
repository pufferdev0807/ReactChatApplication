import React from 'react';
import GuestScreen from './Components/GuestScreen';
import socketIOClient from 'socket.io-client';
import {Button} from '@material-ui/core'
import './app-style.css';

let socket;

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={

    }
    socket = socketIOClient("localhost:3001");
  }

  render(){
    return(
        <div className="container">
        <button className="adminBtn">Admin Login</button>
        <GuestScreen></GuestScreen>
        </div>
    );
  }
}

export {App, socket}