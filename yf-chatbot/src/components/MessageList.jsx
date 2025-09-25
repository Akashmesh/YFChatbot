import React, { useEffect, useRef } from 'react'
import Message from './Message'
import { AnimatePresence, motion } from 'framer-motion'

export default function MessageList({ messages }){
  const endRef = useRef(null)

  useEffect(()=>{
    endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
  },[messages])

  return (
    <div className="message-list">
      <AnimatePresence initial={false} mode="popLayout">
        {messages.map(m => (
          <motion.div
            key={m.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.22 }}
          >
            <Message message={m} />
          </motion.div>
        ))}
      </AnimatePresence>
      <div ref={endRef} />
    </div>
  )
}