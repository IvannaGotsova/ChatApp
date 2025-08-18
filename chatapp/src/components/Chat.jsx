import React, { useState, useEffect, useRef } from 'react';
import styles from '../css/Chat.module.css'

function Chat() {

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [conversationTitile, setConversationTitile] = useState('');

  const messagesScrollDownRef = useRef(null);

  const scrollToUp = () => {
    messagesScrollDownRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const sendMessage = () => {
    if (input.trim() === '') return;
    setMessages([...messages, `You: ${input}`]);
    setInput('');
  };

  const handleChange = (e) => {
    setConversationTitile(e.target.value);
  };

  const handleClick = () => {
    if (conversationTitile.trim()) {
      document.title = `${conversationTitile}`;
    }
  };

  useEffect(() => {
    scrollToUp();
  }, [messages]);

  return (
  <>
    <div>
      <input className={styles.chatInput}
        type="text"
        placeholder="Enter a conversation title"
        value={conversationTitile}
        onChange={handleChange}
      />
      <button onClick={handleClick} className={styles.chatButton}>Change</button>
    </div>
    <div className={styles.chatStyle}>
      <div className={styles.chatWindow}>
        {messages.map((m, index) => (
          <div key={index}>{m}</div>
        ))}
        <div ref={messagesScrollDownRef} />
      </div>
      <input className={styles.chatInput}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Write a message"
      />
      <button onClick={sendMessage} className={styles.chatButton}>Send</button>
    </div>
  </>
  )
};

export default Chat;