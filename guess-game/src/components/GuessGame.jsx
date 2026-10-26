import { useState } from 'react';
import GuessForm from './GuessForm';
import Message from './Message';

function GuessGame() {
  const [secretNumber] = useState(() => Math.floor(Math.random() * 100) + 1);
  const [input, setInput] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [result, setResult] = useState({ text: '', status: 'idle' });

  function handleSubmit(event) {
    event.preventDefault();

    const guess = Number(input);
    setAttempts((previousAttempts) => previousAttempts + 1);

    if (guess === secretNumber) {
      setResult({ text: 'Teisingai!', status: 'won' });
    } else {
      setResult({
        text: guess > secretNumber ? 'Bandyk mažesnį' : 'Bandyk didesnį',
        status: 'hint',
      });
    }
  }

  return (
    <section aria-labelledby="game-title">
      <h1 id="game-title">Skaičių spėjimo žaidimas</h1>
      <p>Atspėkite slaptą sveikąjį skaičių nuo 1 iki 100.</p>
      <GuessForm
        input={input}
        onInputChange={(event) => setInput(event.target.value)}
        onSubmit={handleSubmit}
      />
      <p className="attempts">Bandymų skaičius: <strong>{attempts}</strong></p>
      <Message text={result.text} status={result.status} />
    </section>
  );
}

export default GuessGame;
