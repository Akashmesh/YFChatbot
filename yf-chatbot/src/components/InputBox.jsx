import React, { useState } from "react";
import { IoSend } from "react-icons/io5"; // import WhatsApp-like send icon

export default function InputBox({ onSend }) {
  const [text, setText] = useState("");

  function submit(e) {
    e?.preventDefault();
    if (!text.trim()) return;
    onSend(text);
    setText("");
  }

  return (
    <form className="input-row" onSubmit={submit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={`टाइप करा — उदाहरण: hi किंवा 1`}
        aria-label="chat input"
      />
      <button type="submit" className="send-btn">
        <IoSend size={22} />
      </button>
    </form>
  );
}
