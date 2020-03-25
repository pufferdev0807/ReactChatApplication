import React from 'react';
import {FormControl, Button} from '@material-ui/core/';
import { socket } from '../App';

class MessageComposer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            msg: ''
        }
        this.handleChange = this.handleChange.bind(this);
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

    render() { 
        return (  
            <FormControl>
                <textarea onChange={this.handleChange} placeholder="Type here..."/>
                <Button onClick={this.sendMessage} variant="contained" color="secondary">Send</Button>
            </FormControl>
        );
    }
}
 
export default MessageComposer;