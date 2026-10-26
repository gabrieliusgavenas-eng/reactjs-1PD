# Guess game

Part C of the React practice assignment. Vite, React and JavaScript;
functional components and useState only, with no additional runtime libraries.

## Run

From this folder:

```powershell
npm.cmd install
npm.cmd run dev
```

Open the Local address printed by Vite.

## Checks

```powershell
npm.cmd run lint
npm.cmd run build
node --test tests/evaluateGuess.test.js
```

## Code guide

- App displays GuessGame.
- GuessGame stores the secret number, input, attempts and result.
- The useState initializer generates an integer from 1 through 100.
  React may call the initializer twice in development StrictMode to check
  purity, but the retained secret does not change between guesses.
- GuessForm receives its value and callbacks through props. The form onSubmit
  handles both the button and Enter. preventDefault prevents page reloads.
- Message displays the result supplied through props.
- evaluateGuess validates input and produces the error, hint or winning result.
  It does not change state. Number.isInteger rejects nonnumeric and fractional values.
- GuessGame increments attempts only for a valid result, including a winning one.
- After winning, the field and submit button are disabled; the handler also
  guards against further submissions.
- The secret is never rendered. Reload the page to start a new game.
  A random new game can happen to generate the same number.

## Manual verification

1. Initially attempts are 0, the input is blank, and there is no hint.
2. Submit an empty value, spaces, abc, 1.5, 0 and 101.
   Each produces an error and leaves attempts unchanged.
3. Submit 50 using Enter. Attempts become 1 and a hint or success appears.
4. Follow the hints, choosing the midpoint of the remaining interval.
   For example: after 50, use 25 when told to go lower or 75 when told to go higher.
5. Every valid submission adds exactly one attempt.
6. On success, Teisingai! appears, the winning attempt is counted,
   and both input and submit button are disabled.
7. Reload: attempts return to 0 and the form becomes usable.
8. Narrow the window: the field and button stack without overflowing.

Automated tests cover invalid input, inclusive boundaries, whitespace,
both hint directions and the correct guess. Build and lint are checked
separately. Interactive browser verification remains a manual step.
