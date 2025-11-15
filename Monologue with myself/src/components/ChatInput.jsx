export default function ChatInput({ input, setInput, sendMessage }) {
  return (
    <div className="chat-input">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        placeholder="Введите сообщение..."
      />
      <button onClick={sendMessage}>➤</button>
    </div>
  );
}
