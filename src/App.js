import * as math from 'mathjs';
import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
function App() {

  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const addToText = (val) => {
    setText((text) => [...text, val + ""]);
  };

  const calculateResult = ()=>{
    const input = text.join("");
    setResult(math.evaluate(input))
  };
  const resetInput = () => {
    setText("");
    setResult("");
  };

  return (
    <div className="App">
       <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="container">
        <span classname="sun" style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
        <div className="switch-checkbox">
          <label className="switch">
            <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
            <span className="slider round"> </span>
          </label>
        </div>
        <span style={{ color: darkMode ? "#c96dfd" : "grey" }}>☽</span>
      </div>
       

      <div className='calc-wrapper'>
      <Input className="inputfield" text={text} result={result}/>
      <div className='row'>
      <Button symbol={"7"} handleClick={addToText}/>
      <Button symbol={"8"} handleClick={addToText}/>
      <Button symbol={"9"} handleClick={addToText}/>
      <Button symbol={"/"} color="blue" handleClick={addToText}/>
      </div>
      <div className='row'>
      <Button symbol={"4"} handleClick={addToText}/>
      <Button symbol={"5"} handleClick={addToText}/>
      <Button symbol={"6"} handleClick={addToText}/>
      <Button symbol={"*"} color="blue" handleClick={addToText}/>
      </div>
      <div className='row'>
      <Button symbol={"1"} handleClick={addToText}/>
      <Button symbol={"2"} handleClick={addToText}/>
      <Button symbol={"3"} handleClick={addToText}/>
      <Button symbol={"-"} color="blue" handleClick={addToText}/>
      </div>
      <div className='row'>
      <Button symbol={"0"} handleClick={addToText}/>
      <Button symbol={"."} handleClick={addToText}/>
      <Button symbol={"="} color="blue" handleClick={calculateResult}/>
      <Button symbol={"+"} color="blue" handleClick={addToText}/>
      </div>
      <Button symbol={"Clear"} handleClick={resetInput}/>
      </div>
      </div>
      </div>
    
    
  );
}

export default App;
