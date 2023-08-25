import React, { useState } from 'react'
import './App.css'

function App() {
  const [result, setResult] = useState("");
  const clickHandle = (e) => {
    return (
      setResult(result.concat(e.target.value)));
  }
  const calculate = () => {
    return (
      setResult(eval(result)));
  }
  const clr = () => {
    setResult("");
  }
  return (
    <div className='container'>
      <div>
        <form action=''>
          <div >
            <input type='text' className='screen' value={result} />
          </div>
          <div>
            <input type="button" value="AC" onClick={clr} />
            <input type="button" value="DE" onClick={e => setResult(result.slice(0, -1))} />
            <input type="button" value="." onClick={clickHandle} />
            <input type="button" value="/" onClick={clickHandle} />
          </div>
          <div>
            <input type="button" value="1" onClick={clickHandle} />
            <input type="button" value="2" onClick={clickHandle} />
            <input type="button" value="3" onClick={clickHandle} />
            <input type="button" value="*" onClick={clickHandle} />
          </div>
          <div>
            <input type="button" value="4" onClick={clickHandle} />
            <input type="button" value="5" onClick={clickHandle} />
            <input type="button" value="6" onClick={clickHandle} />
            <input type="button" value="+" onClick={clickHandle} />
          </div>
          <div>
            <input type="button" value="7" onClick={clickHandle} />
            <input type="button" value="8" onClick={clickHandle} />
            <input type="button" value="9" onClick={clickHandle} />
            <input type="button" value="-" onClick={clickHandle} />
          </div>
          <div>
            <input type="button" value="00" onClick={clickHandle} />
            <input type="button" value="0" onClick={clickHandle} />
            <input type="button" value="=" className='equal' onClick={calculate} />
          </div>
        </form>
      </div>

    </div>
  )
}

export default App;
