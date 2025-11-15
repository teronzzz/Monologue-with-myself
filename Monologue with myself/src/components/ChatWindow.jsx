export default function ChatWindow({ messages, lastMessageRef, children }) {
  return (
    <div className="chat-window">
      {children}
      {messages.map((msg) => (
        <div key={msg.id} className="message">
          <p>{msg.text}</p>
          <span>{msg.time}</span>
        </div>
      ))}
      <div ref={lastMessageRef} />
    </div>
  );
}
