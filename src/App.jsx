import { use, useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'

function App() {
    //useState for storing intialized content and updated content.
    const [count,setCount] = useState(0);
    const [numbers,setNumbers] = useState([]);
    const [isAscending, setAscending] = useState(true);

    // increment function
    const increment = () => setCount(count+1);// increment values.
    //decrement function 
    const decrement = () => setCount(previous => (previous>0)?previous-1:0);// decrement values.

    // addList function
    const addList = ()=>{
      if(count>0 && !numbers.includes(count)){ // this line prevents the duplicate values.
        setNumbers([...numbers,count]);// stores the count into numbers array.
        setCount(0);// count set to 0 value.
      }
    };

    // this toggles the value of Ascending to true or false
    const toggle = () =>{
      setAscending(!isAscending);
    }

    // sort the values based on the ascending and descending.
    const sorted = [...numbers].sort((a,b) => 
      isAscending ?a-b : b-a
   );

    return (
    <div className="container">
      <h1>Counter App</h1>

      <div className="counter-display">{count}</div>

      <div className="buttons">
        <button onClick={increment}>+</button>
        <button onClick={decrement}>−</button>
        <button onClick={addList}>Add</button>
        <button onClick={toggle}>
          Sort: {isAscending ? 'Asc' : 'Desc'}
        </button>
      </div>

      <h3>Added Numbers</h3>
      <ul>
        {sorted.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </div>
  );
}

export default App
