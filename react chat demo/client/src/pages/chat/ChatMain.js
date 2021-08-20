import React from 'react';
import "./chatMain.css";
import Chatbody from "./ChatBody";

function ChatMain() {
    const handleNewUserMessage = (newMessage) => {
        console.log('New message..' [newMessage])}
    return (
        <div>
            <Chatbody handleNewUserMessage={handleNewUserMessage}/>
        </div>
    )
}

export default ChatMain;
