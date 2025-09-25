import React, { useState, useEffect } from 'react'
import ChatWindow from './components/ChatWindow'
import messagesData from './data/messages.json'


export default function App(){
  const [history, setHistory] = useState([])

  useEffect(()=>{
    pushBotMessage(messagesData.menu)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  function pushBotMessage(payload){
    setHistory(h => [...h, { from: 'bot', id: Date.now()+Math.random(), payload }])
  }

  function pushUserMessage(text){
    setHistory(h => [...h, { from: 'user', id: Date.now()+Math.random(), payload: text }])
  }

  function onUserSend(raw){
    const text = String(raw || '').trim()
    if(!text) return
    pushUserMessage(text)
    handleUserInput(text)
  }

  function handleUserInput(raw){
    const text = raw.trim()
    const key = text.toLowerCase()

    const greetings = ['hi','hello','hey','हाय','हेलो']
    if(greetings.includes(key)){
      return pushBotMessage(messagesData.menu)
    }

    if(/^[1-8]$/.test(key)){
      const payload = messagesData.options[key]
      if(payload) return pushBotMessage(payload)
    }

    if(['menu','main','मेनू','मेन्यू'].includes(key)){
      return pushBotMessage(messagesData.menu)
    }

    pushBotMessage({ text: 'माफ करा, मी समजले नाही. मुख्य मेन्यूसाठी "hi" टाइप करा किंवा 1-8 मधून निवडा.' })
  }

  return (
    <div className="app-root">
      <ChatWindow messages={history} onSend={onUserSend} />
      <footer className="credits">YOUTH FESTIVAL- 2025 •  <code>SGBAU</code></footer>
    </div>
  )
}
