import { useState } from 'react'

const Anecdote = (props) => {
  return (
    <>
      <p>{props.anecdote}</p>
      <p>Votes: {props.votes}</p>
    </>
  );
}
const Control = (props) => {
  return (
    <>
      <button onClick={props.handleVote}>Vote</button>
      <button onClick={props.handleSelect} >Next Anecdote</button>
    </>
  );
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState([0, 0, 0, 0, 0, 0, 0, 0])
  const handleVote = () => {
    let copy = [...points];
    copy[selected] += 1;
    setPoints(copy);
  }
  const handleSelect = () => {
    let random = Math.floor(Math.random() * anecdotes.length);
    setSelected(random);
  }
  const Largest = (props) => {
    return(
      <div>
        <h2>Anecdote with the most votes</h2>
        <p>{props.anecdote}</p>
        <p>Votes: {props.votes}</p>
      </div>
    );
  }
  const findLargest = () => {
    let index = 0;
    let max = points[0];
    for(let i=0; i < points.length;i++ ){
      if (max < points[i]){
        max = points[i];
        index = i;
      }
    }
    return index;
  }
  return (
    <div>
      <Anecdote anecdote={anecdotes[selected]} votes={points[selected]} />
      <Control handleSelect={handleSelect}  handleVote={handleVote}/>
      <Largest anecdote={anecdotes[findLargest()]} votes={points[findLargest()]} />
    </div>
  )
}

export default App
