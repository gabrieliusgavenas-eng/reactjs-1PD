function GuessForm({ input, onInputChange, onSubmit, disabled = false }) {
  return (
    <form onSubmit={onSubmit} noValidate>
      <label htmlFor="guess">Jūsų spėjimas</label>
      <div className="form-controls">
        <input
          id="guess"
          type="text"
          inputMode="numeric"
          value={input}
          onChange={onInputChange}
          disabled={disabled}
          autoComplete="off"
        />
        <button type="submit" disabled={disabled}>Spėti</button>
      </div>
    </form>
  );
}

export default GuessForm;
