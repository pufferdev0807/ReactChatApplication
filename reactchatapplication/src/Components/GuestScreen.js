import React from 'react';
import {FormControl, Button} from '@material-ui/core';
import { socket } from '../App';

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            alltext: [],
            msg: '',
            room: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }
    
    componentDidMount(){
        socket.on('response', data => {
          console.log(`received ${data.msg}`);
          this.setState({alltext: [...this.state.alltext, data]})
        })
    }

    handleChange = event =>{
        this.setState({msg: event.target.value})
    }

    sendMessage = () => {
        let message = {
          msg:this.state.msg,
          room:'Queefy Kingdom'
        }
        console.log(`emitting message: ${message.msg} in room ${message.room}`)
        socket.emit('message' , message);
    }

    render(){
        return(
            <div id="messageArea" >
                <b id="head">Chat Log:</b>
                {this.state.alltext !== [] ? this.state.alltext.map((val,ctr) => {
                    return <React.Fragment key={ctr}><p>{val.msg}</p><br/></React.Fragment>
                }) : "no room"}
                <FormControl>
                    <textarea onChange={this.handleChange} placeholder="Type here..."/>
                    <Button onClick={this.sendMessage} variant="contained" color="secondary">Send</Button>
                </FormControl>
            </div>
        )
      }
    }