export function evaluateGuess(input, secretNumber) {
  const trimmedInput = input.trim();
  const guess = Number(trimmedInput);

  if (
    trimmedInput === '' ||
    !Number.isInteger(guess) ||
    guess < 1 ||
    guess > 100
  ) {
    return {
      text: 'Įveskite sveikąjį skaičių nuo 1 iki 100.',
      status: 'error',
    };
  }

  if (guess === secretNumber) {
    return { text: 'Teisingai!', status: 'won' };
  }

  return {
    text: guess > secretNumber ? 'Bandyk mažesnį' : 'Bandyk didesnį',
    status: 'hint',
  };
}
