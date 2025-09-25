import React from 'react'
function renderPayload(payload) {
  if (!payload) return null
  if (typeof payload === 'string')
    return <div className="msg-text" dangerouslySetInnerHTML={{ __html: payload.replace(/\n/g, '<br/>') }} />

  return (
    <div className="msg-text">
      {payload.text && (
        <div
          className="text-block"
          dangerouslySetInnerHTML={{ __html: payload.text.replace(/\n/g, '<br/>') }}
        />
      )}
      {payload.links && payload.links.length > 0 && (
        <div className="links">
          {payload.links.map((l, i) => (
            <div key={i} className="link-row">
              <a href={l.url} target="_blank" rel="noreferrer">{l.label || l.url}</a>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}


export default function Message({ message }){
  const from = message.from
  return (
    <div className={`message ${from === 'user' ? 'user' : 'bot'}`}>
      <div className="bubble">
        {from === 'bot' && <div className="bot-tag">Bot</div>}
        {renderPayload(message.payload)}
      </div>
    </div>
  )
}





