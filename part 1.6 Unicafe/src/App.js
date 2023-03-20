import { useState } from 'react'

const Header = () => {
  return (
    <>
      <h1>Hello, please give feedback!</h1>
      <hr />
    </>
  )
}
const StatsLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  );
}
const Stats = (props) => {
  return (
    <table>
      <tbody>
        <StatsLine text="Good" value={props.good} />
        <StatsLine text="Neutral" value={props.neutral} />
        <StatsLine text="Bad" value={props.bad} />
        <StatsLine text="All" value={props.good + props.neutral + props.bad} />
        <StatsLine text="Average" value={(props.good - props.bad) / 9} />
        <StatsLine text="Positive" value={(props.good / (props.good + props.neutral + props.bad)) * 100 + "%"} />
      </tbody>
    </table>
  );
}

const Voting = (props) => {
  return (
    <div>
      <button onClick={props.setGood}>good</button>
      <button onClick={props.setNeutral}>neutral</button>
      <button onClick={props.setBad}>bad</button>

    </div>
  );
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1);
  }
  const handleBad = () => {
    setBad(bad + 1);
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1);
  }

  const statsVeiew = () => {
    if (good != 0 || bad != 0 || neutral != 0) {
      return <Stats good={good} neutral={neutral} bad={bad} />
    } else {
      return "No Feedback given ):"
    }
  }

  return (
    <div>
      <Header />
      <Voting setGood={handleGood} setBad={handleBad} setNeutral={handleNeutral} />
      <h3>Statistics</h3>
      {statsVeiew()}

    </div>
  )
}

export default App