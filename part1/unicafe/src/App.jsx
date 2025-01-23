import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" state={good} stateFn={setGood} />
      <Button text="neutral" state={neutral} stateFn={setNeutral} />
      <Button text="bad" state={bad} stateFn={setBad} />

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

const Button = ({ text, state, stateFn }) => {
  return <button onClick={() => stateFn(state + 1)}>{text}</button>
}

const Statistics = ({ good, neutral, bad }) => {
  const responses = good + neutral + bad;
  if (responses > 0) {
    return <>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="average" value={(good - bad) / (responses)} />
          <StatisticLine text="positive" value={(good * 100) / (responses) + " %"} />
        </tbody>
      </table>
    </>
  }
  else {
    return <>
      <h1>statistics</h1>
      <p>No feedback given</p>
    </>
  }
}

const StatisticLine = ({ text, value }) => {
  return <tr><td>{text}</td><td>{value}</td></tr>
}


export default App 