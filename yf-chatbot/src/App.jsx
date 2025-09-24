import React, { useState, useEffect } from 'react'
import ChatWindow from './components/ChatWindow'
import messagesData from './data/messages.json'

export default function App(){
  // We'll keep messages shown to the user here
  const [history, setHistory] = useState([])
  const [context, setContext] = useState({ lastOption: null })

  // show main menu on first load
  useEffect(()=>{
    pushBotMessage(messagesData.menu)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  function pushBotMessage(payload){
    // payload can be a string or an object with {text, links}
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

    // always respond to greetings with main menu
    const greetings = ['hi','hello','hey','हाय','हेलो','hi.','hello.','hey.']
    if(greetings.includes(key)){
      setContext({ lastOption: null })
      return pushBotMessage(messagesData.menu)
    }

    // If user typed one of the main numeric choices
    if(/^[1-7]$/.test(key)){
      const opt = key
      setContext({ lastOption: opt })
      const payload = messagesData.options[opt]
      if(payload) return pushBotMessage(payload)
    }

    // handle sub-commands after option 1
    if(context.lastOption === '1'){
      if(key === 'p') return pushBotMessage(messagesData.options['1_sub_p'])
      if(key === '0') return pushBotMessage(messagesData.options['1_sub_0'])
    }

    // special fallback: if user types 'menu' or 'main' or 'मेनू'
    if(['menu','main','मेनू','मेन्यू','मेनू.','menu.'].includes(key)){
      setContext({ lastOption: null })
      return pushBotMessage(messagesData.menu)
    }

    // not recognized -> polite fallback
    pushBotMessage({ text: 'माफ करा, मी समजले नाही. मुख्य मेन्यूसाठी "hi" टाइप करा किंवा 1-7 मधून निवडा.' })
  }

  return (
    <div className="app-root">
      <ChatWindow messages={history} onSend={onUserSend} />
      <footer className="credits">Youth Festival- 2025 SGBAU • <code>by Akash</code></footer>
    </div>
  )
}