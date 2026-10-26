import { useState } from 'react';
import GuessForm from './GuessForm';
import Message from './Message';
import { evaluateGuess } from '../utils/evaluateGuess';

function GuessGame() {
  const [secretNumber] = useState(() => Math.floor(Math.random() * 100) + 1);
  const [input, setInput] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [result, setResult] = useState({ text: '', status: 'idle' });
  const hasWon = result.status === 'won';

  function handleSubmit(event) {
    event.preventDefault();

    if (hasWon) return;

    const nextResult = evaluateGuess(input, secretNumber);
    setResult(nextResult);

    if (nextResult.status !== 'error') {
      setAttempts((previousAttempts) => previousAttempts + 1);
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
        disabled={hasWon}
        hasError={result.status === 'error'}
      />
      <p className="attempts">Bandymų skaičius: <strong>{attempts}</strong></p>
      <Message text={result.text} status={result.status} />
      {hasWon && <p>Norėdami pradėti naują žaidimą, perkraukite puslapį.</p>}
    </section>
  );
}

export default GuessGame;
