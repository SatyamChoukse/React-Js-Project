import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // let counter =5;

  let [counter,setCounter] = useState(5);

  const Addvalue = () =>{
    if(counter<20){
      // counter=counter+1;
      setCounter(prevcounter => prevcounter+1);
      setCounter(prevcounter => prevcounter+1);
      setCounter(prevcounter => prevcounter+1);
      setCounter(prevcounter => prevcounter+1);
    }
  }

  const Removevalue=()=>{
    if(counter>0){
      counter = counter-1;
      setCounter(counter);
    }
  }

  return (
    <>
     <h1>Counter Project</h1>
     <h2>Counter value: {counter}</h2>

     <button onClick={Addvalue}>Add value</button>
     <button onClick={Removevalue}>Remove value</button>
    </>
  )
}

export default App
