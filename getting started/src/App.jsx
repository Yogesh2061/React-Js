
import React,{useState} from 'react'
const App = () => {
  const [a, setA] = useState(10); //use state hook
  const changeA=()=>{
    setA(20)
  }
  return (
    <div>
    <h1>Value of a is {a}</h1>
    <button onClick={changeA}>Change </button>
  </div>
  );
  
}
 
export default App;