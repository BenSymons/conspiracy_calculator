import './App.css';
import {useState} from "react"
import evaluateWord from './utils/evaluate';

function App() {
  const [word, setWord] = useState("")
  const [results, setResults] = useState([])
  const translate = (letter) => letter.toLowerCase().charCodeAt(0) - 96
  console.log(evaluateWord("cat"))

  const calculate = (e) => {
    e.preventDefault()
    setResults(evaluateWord(word))
  }

  return (
    <div className="app">
      <div className="search-container">
        <h1>Conspiracy Calculator</h1>
        <form onSubmit={calculate}>
          <label>input word here</label>
          <input 
            onChange={(e) => setWord(e.target.value)}
            value={word}
          />
          <button type="submit">calculate</button>
        </form>
      </div>
      {results.length > 0 && (
        <div>
          {results.map((result, index, arr) => {
          
            if(index === 0) {
              return <p>This word evalutates to: {result}</p>
            }
            if(index === arr.length - 1) {
              return <p>and finally: {result}</p>
            }
            return <p>Then: {result}</p>
          })}
        </div>
      )}
    </div>
  );
}

export default App;