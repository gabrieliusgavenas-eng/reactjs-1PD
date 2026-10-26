function Message({ text, status }) {
  return (
    <p className={`message ${status}`} role="status" aria-live="polite">
      {text}
    </p>
  );
}

export default Message;
