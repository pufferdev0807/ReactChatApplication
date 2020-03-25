import React from 'react';
import MessageArea from './MessageArea';
import MessageComposer from './MessageComposer';
export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            alltext: [],
            msg: '',
            room: ''
        }
    }
    render(){
        return(
            <>
            <MessageArea alltext={this.state.alltext}></MessageArea>
            <MessageComposer></MessageComposer>
            </>
        )
      }
    }