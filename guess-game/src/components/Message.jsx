function Message({ text, status }) {
  return (
    <p id="game-message" className={`message ${status}`} role="status" aria-live="polite">
      {text}
    </p>
  );
}

export default Message;
