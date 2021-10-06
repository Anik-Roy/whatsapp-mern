import React, { useState } from 'react';
import './Chat.css';
import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, SearchOutlined, MoreVert, InsertEmoticon, Mic, Send } from '@material-ui/icons';

const Chat = () => {
    const [messages, setMessages] = useState([
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {}
    ]);

    const sendMessage = e => {
        e.preventDefault();
    }

    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar />
                <div className="chat_headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen at...</p>
                </div>
                <div className="chat_headerRight">
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="chat-body">
                {messages.map((msg, idx) => <p key={idx} className={`chat-message ${idx % 2 === 0 ? "" : " chat-receiver"}`}>
                    <span className="chat-name">Sonny</span>
                    This is a message
                    <span className="chat_timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>)}
            </div>
            <div className="chat-footer">
                <IconButton>
                    <InsertEmoticon />
                </IconButton>
                <form>
                    <input
                        placeholder="Type a message"
                        type="text" />
                    <IconButton onClick={sendMessage} type="submit">
                        <Send />
                    </IconButton>
                </form>
                <IconButton>
                    <Mic />
                </IconButton>
            </div>
        </div>
    )
}

export default Chat
