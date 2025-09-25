import React from 'react'
import MessageList from './MessageList'
import InputBox from './InputBox'

export default function ChatWindow({ messages, onSend }) {
  return (
    <div className="chat-wrap">
      {/* Header */}
      <header className="chat-header">
        <div className="avatar">
          <img src="/sgbau.png" alt="University Logo" />
        </div>
        <div className="title">
          आंतर महाविद्यालयीन युवा महोत्सव 2025
        </div>
      </header>

      {/* Messages */}
      <main className="chat-body">
        <MessageList messages={messages} />
      </main>

      {/* Input */}
      <InputBox onSend={onSend} />
    </div>
  )
}
