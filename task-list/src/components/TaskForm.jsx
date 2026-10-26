import { useState } from "react";

function TaskForm({ onAdd }) {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const trimmedText = text.trim();

    if (trimmedText === "") {
      setError("Įveskite užduoties tekstą.");
      return;
    }

    onAdd(trimmedText);
    setText("");
    setError("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task-text">Užduotis</label>

      <input
        id="task-text"
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />

      <button type="submit">Pridėti užduotį</button>

      {error && <p role="alert">{error}</p>}
    </form>
  );
}

export default TaskForm;