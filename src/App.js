import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  function handleCount() {
    setCount(count => count + 1);
  }

  function handleGoodCount() {
    setGood(good => good + 1);
  }

  function handleBadCount() {
    setBad(bad => bad + 1);
  }

  function handleNeutralCount() {
    setNeutral(neutral => neutral + 1);
  }

  function handleReset() {
    setCount(0);
    setScore(0);
    setGood(0);
    setBad(0);
    setNeutral(0);
  }

  return (
    <div className="box">
      <h1>Feedback Tracker ❤️ </h1>
      <p className="reset" onClick={handleReset}>
        Reset
      </p>
      <Display
        count={count}
        score={score}
        good={good}
        bad={bad}
        neutral={neutral}
      />
      <div className="button__container">
        <Button
          color="green"
          score={setScore}
          value={1}
          onGood={handleGoodCount}
          onCount={handleCount}
        >
          Good❤️
        </Button>
        <Button
          color="blue"
          score={setScore}
          value={0}
          onNeutral={handleNeutralCount}
          onCount={handleCount}
        >
          Neutral😙
        </Button>
        <Button
          color="red"
          score={setScore}
          value={-1}
          onBad={handleBadCount}
          onCount={handleCount}
        >
          Bad❌
        </Button>
      </div>
    </div>
  );
}

export default App;

function Button({
  color,
  value,
  score,
  onCount,
  onBad,
  onGood,
  onNeutral,
  children,
}) {
  function handleScore() {
    score(score => score + value);

    onCount();
    if (value === 1) onGood();
    if (value === -1) onBad();
    if (value === 0) onNeutral();
  }

  return (
    <div className={`button ${color}`} onClick={handleScore}>
      {children}
    </div>
  );
}

function Display({ count, score, good, bad, neutral }) {
  let aveScore;
  let percentGood;
  if (count) {
    aveScore = score / count;
    percentGood = (good / count) * 100;
  } else {
    aveScore = 0;
    percentGood = 0;
  }
  return (
    <div className="display">
      <div className="emoji">
        <span>❤️ {good} </span>
        <span>😙 {neutral} </span>
        <span>❌ {bad} </span>
      </div>
      <p>
        Total feedback count: <span className="count">{count}</span>
      </p>
      <p>
        Total score:
        <span className={score > 0 ? 'count' : 'negative'}>{score}</span>
      </p>
      <p>
        Average score:
        <span className={aveScore > 0 ? 'count' : 'negative'}>
          {Number(aveScore.toFixed(2))}
        </span>
      </p>
      <p>
        Percentage of positive feedback:{' '}
        <span className="count"> {Number(percentGood.toFixed(2))}% </span>
      </p>
    </div>
  );
}
