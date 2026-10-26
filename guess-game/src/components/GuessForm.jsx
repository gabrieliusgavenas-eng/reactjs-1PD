function GuessForm({ input, onInputChange, onSubmit, disabled, hasError }) {
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
          aria-invalid={hasError}
          aria-describedby="game-message"
        />
        <button type="submit" disabled={disabled}>Spėti</button>
      </div>
    </form>
  );
}

export default GuessForm;
