import React from 'react'
import ChatBar from './ChatBar'
import ChatFooter from './ChatFooter'
import ChatBody from './ChatBody'

function ChatPage({ socket }) {
  return (
    <div className='chat'>
      <ChatBar />
      <div className='chat_main' style={{flex:1}}>
        <ChatBody />
        <ChatFooter socket={socket} />
      </div>
    </div>
  )
}

export default ChatPage