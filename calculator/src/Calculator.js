import React,{useState} from 'react'

function Calculator() {

    const [result,setResult] = useState("");
    const clickHandler= (event) => {
        setResult(result.concat(event.target.name))
    }

    const clearDisplay = () => {
        setResult("");
    }

    const calculate = () => {
        setResult(eval(result).toString())
    }

  return (
    <div className="container">
    <h1>Calculator</h1>
    <div class="calculator">
        <input type="text" name="screen" id="screen" value={result}></input>
    <table >
        <tr>
            <td><button name="(" onClick={clickHandler}>(</button></td>
            <td><button name=")" onClick={clickHandler}>)</button></td>
            <td><button name="C" onClick={clearDisplay}>C</button></td>
            <td><button name="%" onClick={clickHandler}>%</button></td>
        </tr>
        <tr>
            <td><button name="7" onClick={clickHandler}>7</button></td>
            <td><button name="8" onClick={clickHandler}>8</button></td>
            <td><button name="9" onClick={clickHandler}>9</button></td>
            <td><button name="*" onClick={clickHandler}>*</button></td>
        </tr>
        <tr>
            <td><button name="4" onClick={clickHandler}>4</button></td>
            <td><button name="5" onClick={clickHandler}>5</button></td>
            <td><button name="6" onClick={clickHandler}>6</button></td>
            <td><button name="-" onClick={clickHandler}>-</button></td>
        </tr>
        <tr>
            <td><button name="3" onClick={clickHandler}>3</button></td>
            <td><button name="2" onClick={clickHandler}>2</button></td>
            <td><button name="1" onClick={clickHandler}>1</button></td>
            <td><button name="+" onClick={clickHandler}>+</button></td>
        </tr>
        <tr>
            <td><button name="0" onClick={clickHandler}>0</button></td>
            <td><button name="." onClick={clickHandler}>.</button></td>
            <td><button name="/" onClick={clickHandler}>/</button></td>
            <td><button name="=" onClick={calculate}>=</button></td>
        </tr>
    </table>
    </div>
    </div>
  )
}

export default Calculator;
