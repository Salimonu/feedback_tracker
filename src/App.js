import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);

  function handleCount() {
    setCount(count => count + 1);
  }

  return (
    <div className="box">
      <h1>Feedback Tracker ❤️ </h1>
      <Display count={count} score={score} />
      <div className="button__container">
        <Button color="green" score={setScore} value={1} onCount={handleCount}>
          Good
        </Button>
        <Button color="blue" score={setScore} value={0} onCount={handleCount}>
          Neutral
        </Button>
        <Button color="red" score={setScore} value={-1} onCount={handleCount}>
          Bad
        </Button>
      </div>
    </div>
  );
}

export default App;

function Button({ color, value, score, onCount, children }) {
  function handleScore() {
    score(score => score + value);

    onCount();
  }

  return (
    <div className={`button ${color}`} onClick={handleScore}>
      {children}
    </div>
  );
}

function Display({ count, score }) {
  let aveScore;
  if (count) {
    aveScore = score / count;
  } else aveScore = 0;
  return (
    <div className="display">
      <p>
        Total feedback count: <span className="count">{count}</span>
      </p>
      <p>
        Average score:
        <span className={aveScore > 0 ? 'count' : 'negative'}>{aveScore}</span>
      </p>
      <p>Percentage of positive feedback:</p>
    </div>
  );
}
