import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Counter name="good" state={good} stateFn={setGood} />
      <Counter name="neutral" state={neutral} stateFn={setNeutral} />
      <Counter name="bad" state={bad} stateFn={setBad} />

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

const Counter = ({ name, state, stateFn }) => {
  return <button onClick={() => stateFn(state + 1)}>{name}</button>
}

const Statistics = ({ good, neutral, bad }) => {
  const responses = good + neutral + bad;
  if (responses > 0) {
    return <>
      <h1>statistics</h1>
      <CountStat name="good" state={good} />
      <CountStat name="neutral" state={neutral} />
      <CountStat name="bad" state={bad} />
      <p>average {(good - bad) / (responses)}</p>
      <p>positive {(good * 100) / (responses)} %</p>
    </>
  }
  else {
    return <>
      <h1>statistics</h1>
      <p>No feedback given</p>
    </>
  }
}

const CountStat = ({ name, state }) => {
  return <p>{name} {state}</p>
}


export default App 