import React, { useState } from 'react'

export default function InputBox({ onSend }){
  const [text, setText] = useState('')

  function submit(e){
    e?.preventDefault()
    if(!text.trim()) return
    onSend(text)
    setText('')
  }

  return (
    <form className="input-row" onSubmit={submit}>
      <input
        value={text}
        onChange={e=>setText(e.target.value)}
        placeholder={`TYPE- hi or 1 to 7`}
        aria-label="chat input"
      />
      <button type="submit">SEND</button>
    </form>
  )
}