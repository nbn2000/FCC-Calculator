import './App.css';
import { numbersHandler } from './numbersHandler';
import { useStateAndVars } from './useStateAndVars';
import { operationsHandler } from './operationsHandler';
import { equalHandler } from './equalHandler';

function App() {
  // Destructure state variables and functions from useStateAndVars custom hook
  const { math, display, setDisplay, curDisp, setCurDisp,
    bool, setBool, regex, last, lastEl } = useStateAndVars()

  // Event handler for numbers button click
  const numbers = (event) => {
    const number = event.target.textContent
    // Call numbersHandler function to update state based on button click
    numbersHandler(number, display, setDisplay, setCurDisp,
      bool, setBool, regex, last)
  }

  // Event handler for operations button click
  const operations = (event) => {
    const operator = event.target.textContent
    // Call operationsHandler function to update state based on button click
    operationsHandler(operator, display, setDisplay, curDisp, setCurDisp,
      bool, setBool, regex, lastEl)
  }

  // Event handler for equal button click
  const equal = () => {
    // Call equalHandler function to calculate and display result
    equalHandler(math, display, setDisplay, setCurDisp,
      bool, setBool)
  }

  // Event handler for decimal button click
  const decimal = () => {
    // Update state to add decimal point to display if conditions are met
    if (!last.includes('.') && !regex.test(lastEl) && !last.endsWith('.')) {
      setDisplay(display + '.')
    }
  }

  // Event handler for clear button click
  const clear = () => {
    // Reset display to '0'
    setDisplay('0')
    // Reset current display to '0'
    setCurDisp('0')
  }
  return (
    <div className="App">
      <div className="container">
        {/* Display main calculator display */}
        <div id="display1">{display}</div>
        {/* Display current input being entered */}
        <div className='cur-disp' id='display'>{curDisp}</div>
        {/* Buttons for calculator operations */}
        <div className="buttons">
          <button id="clear" className='btn btn-default btn-block btn-lg' onClick={clear}>AC</button>
          <button id="divide" className='btn btn-default btn-block btn-lg' onClick={operations}>/</button>
          <button id="multiply" className='btn btn-default btn-block btn-lg' onClick={operations}>x</button>
          <button id="seven" className="btn btn-default btn-block btn-lg" onClick={numbers}>7</button>
          <button id="eight" className="btn btn-default btn-block btn-lg" onClick={numbers}>8</button>
          <button id="nine" className="btn btn-default btn-block btn-lg" onClick={numbers}>9</button>
          <button id="subtract" className='btn btn-default btn-block btn-lg' onClick={operations}>-</button>
          <button id="four" className="dark btn btn-default btn-block btn-lg" onClick={numbers}>4</button>
          <button id="five" className="btn btn-default btn-block btn-lg" onClick={numbers}>5</button>
          <button id="six" className="btn btn-default btn-block btn-lg" onClick={numbers}>6</button>
          <button id="add" className='btn btn-default btn-block btn-lg' onClick={operations}>+</button>
          <button id="one" className="btn btn-default btn-block btn-lg" onClick={numbers}>1</button>
          <button id="two" className="btn btn-default btn-block btn-lg" onClick={numbers}>2</button>
          <button id="three" className="btn btn-default btn-block btn-lg" onClick={numbers}>3</button>
          <button id="zero" className="btn btn-default btn-block btn-lg" onClick={numbers}>0</button>
          <button id="decimal" className="btn btn-default btn-block btn-lg" onClick={decimal}>.</button>
          <button id="equals" className="btn btn-default btn-block btn-lg" onClick={equal}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;