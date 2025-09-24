import React from 'react'
import MessageList from './MessageList'
import InputBox from './InputBox'

export default function ChatWindow({ messages, onSend }){
  return (
    <div className="chat-wrap">
      <header className="chat-header">
        <div className="avatar">YF</div>
        <div className="title">आंतर महाविद्यालयीन युवा महोत्सव 2025</div>
      </header>

      <main className="chat-body">
        <MessageList messages={messages} />
      </main>

      <InputBox onSend={onSend} />
    </div>
  )
}