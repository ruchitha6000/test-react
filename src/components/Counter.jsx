import React,{useState} from 'react'

function Counter() {
    const [count, setCount] = useState(0);
    const [number, setNumber]= useState(1);

    function countIncrement(){
        setCount(count+number);
    }
    function countDecrement(){
        setCount(count-number);
    }

    function numberIncrement(){
        setNumber(number+1);
    }
    function numberDecrement(){
        setNumber(number-1);
    }
  return (
    <div>
        <h1>The counter number is : {count}</h1>
      <button onClick={countIncrement}>Increment</button>
      <button onClick={countDecrement}>Decrement</button>

      <h1>set number : {number}</h1>
      <button onClick={numberIncrement}>Increment</button>
      <button onClick={numberDecrement}>Decrement</button>
    </div>
  )
}

export default Counter
