import React from 'react';
import './SidebarChat.css';
import { Avatar } from '@material-ui/core';

const SidebarChat = () => {
    return (
        <div className="sidebar-chat">
            <Avatar />
            <div className="sidebar-chatInfo">
                <h2>Room name</h2>
                <p>This is the last message</p>
            </div>
        </div>
    )
}

export default SidebarChat
